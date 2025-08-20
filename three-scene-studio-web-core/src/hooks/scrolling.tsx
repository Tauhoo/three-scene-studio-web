import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react'
import styled from 'styled-components'
const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  position: relative;
  scroll-snap-type: y mandatory;
`

const ContentContainer = styled.div`
  width: 100%;
  position: relative;
`

export type ScrollInfo = {
  scrollTop: number
  parentSize: number
  totalContentSize: number
  sectionIndex: number
}

export type Callback = (scrollInfo: ScrollInfo) => void

interface ScrollContextType {
  getCurrentScroll: () => null | ScrollInfo
  scrollToTop: () => void
  addScrollListener: (callback: Callback) => void
  removeScrollListener: (callback: Callback) => void
}

const ScrollContext = createContext<ScrollContextType | null>(null)

export type Props = {
  overlayChildren?: React.ReactNode
}

export const ScrollProvider: React.FC<React.PropsWithChildren<Props>> = ({
  overlayChildren,
  children,
}) => {
  const scrollParentRef = useRef<HTMLDivElement>(null)
  const scrollChildRef = useRef<HTMLDivElement>(null)

  const [stat, setStat] = useState<{
    parentSize: number
    totalContentSize: number
  } | null>(null)
  const mapRef = useRef<Map<Callback, () => void>>(new Map())

  const setup = () => {
    if (scrollChildRef.current === null || scrollParentRef.current === null)
      return
    setStat({
      parentSize: scrollParentRef.current.getBoundingClientRect().height,
      totalContentSize: scrollChildRef.current.getBoundingClientRect().height,
    })
  }

  useEffect(() => {
    setup()
    if (typeof window === 'undefined') return
    window.addEventListener('resize', setup)
    return () => {
      if (typeof window === 'undefined') return
      window.removeEventListener('resize', setup)
    }
  }, [])

  const getCurrentScroll = () => {
    if (scrollParentRef.current === null) return null
    if (stat === null) return null
    if (scrollChildRef.current === null) return null

    const scrollTop = scrollParentRef.current.scrollTop

    const children = [...scrollChildRef.current.children]

    // calculate section index
    let accumHeight = 0
    let index = 0
    let lastRatio = 0
    for (const child of children) {
      const { height } = child.getBoundingClientRect()
      if (scrollTop < accumHeight) continue
      accumHeight += height
      lastRatio = Math.min(1, (scrollTop - accumHeight) / height)
      index++
    }
    const sectionIndex = index + lastRatio
    return {
      scrollTop,
      parentSize: stat.parentSize,
      totalContentSize: stat.totalContentSize,
      sectionIndex,
    }
  }

  const addScrollListener = (callback: Callback) => {
    if (scrollParentRef.current === null) return
    const listener = () => {
      const currentScroll = getCurrentScroll()
      if (currentScroll === null) return
      callback(currentScroll)
    }
    mapRef.current.set(callback, listener)

    scrollParentRef.current.addEventListener('scroll', listener)
  }

  const removeScrollListener = (callback: Callback) => {
    const listener = mapRef.current.get(callback)
    if (listener === undefined) return
    mapRef.current.delete(callback)
    scrollParentRef.current?.removeEventListener('scroll', listener)
  }

  const scrollToTop = () => {
    if (scrollParentRef.current === null) return
    scrollParentRef.current.scroll({ top: 0, behavior: 'smooth' })
  }

  return (
    <ScrollContext.Provider
      value={{
        addScrollListener,
        removeScrollListener,
        getCurrentScroll,
        scrollToTop,
      }}
    >
      <Container ref={scrollParentRef}>
        <ContentContainer ref={scrollChildRef}>{children}</ContentContainer>
      </Container>
      {overlayChildren}
    </ScrollContext.Provider>
  )
}

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}
