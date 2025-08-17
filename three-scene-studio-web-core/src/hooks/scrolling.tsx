import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type RefObject,
  useRef,
} from 'react'

export type Callback = (
  scrollTop: number,
  parentSize: number,
  totalContentSize: number
) => void

interface ScrollContextType {
  getCurrentScroll: () => null | {
    scrollTop: number
    parentSize: number
    totalContentSize: number
  }
  scrollToTop: () => void
  addScrollListener: (callback: Callback) => void
  removeScrollListener: (callback: Callback) => void
}

const ScrollContext = createContext<ScrollContextType | null>(null)

interface ScrollProviderProps {
  scrollParentRef: RefObject<HTMLElement | null>
  scrollChildRef: RefObject<HTMLElement | null>
}

export const ScrollProvider: React.FC<
  React.PropsWithChildren<ScrollProviderProps>
> = ({ children, scrollParentRef, scrollChildRef }) => {
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
    return {
      scrollTop: scrollParentRef.current.scrollTop,
      parentSize: stat.parentSize,
      totalContentSize: stat.totalContentSize,
    }
  }

  const addScrollListener = (
    callback: (
      scrollTop: number,
      parentSize: number,
      totalContentSize: number
    ) => void
  ) => {
    if (scrollParentRef.current === null) return
    const listener = () => {
      if (scrollParentRef.current === null) return
      if (stat === null) return
      callback(
        scrollParentRef.current.scrollTop,
        stat.parentSize,
        stat.totalContentSize
      )
    }
    mapRef.current.set(callback, listener)

    scrollParentRef.current.addEventListener('scroll', listener)
  }

  const removeScrollListener = (
    callback: (
      scrollTop: number,
      parentSize: number,
      totalContentSize: number
    ) => void
  ) => {
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
      {children}
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
