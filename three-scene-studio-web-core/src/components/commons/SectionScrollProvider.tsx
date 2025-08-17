import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const OFFSET_FROM_SCREEN = 10
const POINT_SIZE = 15
const INNER_POINT_SIZE = 10

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

const IndicatorContainer = styled.div`
  position: fixed;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  transform: translateY(-50%);
  top: 50%;
  right: ${OFFSET_FROM_SCREEN}px;
  flex-direction: column;

  @media (max-width: 700px) {
    top: auto;
    right: auto;

    transform: translateX(-50%);
    left: 50%;
    bottom: ${OFFSET_FROM_SCREEN}px;
    flex-direction: row;
  }
`

const PointContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerPointContainer = styled.div`
  width: ${INNER_POINT_SIZE}px;
  height: ${INNER_POINT_SIZE}px;
`

const SectionScrollProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const section4Ref = useRef<HTMLDivElement>(null)

  const [stat, setStat] = useState<{
    sectionHeight: number
    totalSectionHeight: number
  } | null>(null)

  // set up dimension
  const setup = () => {
    if (contentRef.current === null) return
    if (typeof window === 'undefined') return
    const { height: totalSectionHeight } =
      contentRef.current.getBoundingClientRect()
    const sectionHeight = window.innerHeight

    setStat({
      sectionHeight,
      totalSectionHeight,
    })
  }
  useEffect(() => {
    setup()
    if (typeof window === 'undefined') return
    window.addEventListener('resize', setup)
    return () => {
      if (containerRef.current === null) return
      window.removeEventListener('resize', setup)
    }
  }, [])

  // scroll event handle
  const onScroll = () => {
    if (stat === null || containerRef.current === null) return
    const { sectionHeight } = stat
    const sectionProgressNumber = containerRef.current.scrollTop / sectionHeight
    const refs = [section1Ref, section2Ref, section3Ref, section4Ref]

    let result: number[] = []
    for (let index = 0; index < refs.length; index++) {
      const ref = refs[index]
      const diff = Math.min(1, Math.abs(sectionProgressNumber - index))
      if (ref.current === null) continue
      const child = ref.current.children[0] as HTMLDivElement | undefined
      if (child === undefined) return
      const visibleScale = 1 - diff
      const size =
        visibleScale * (POINT_SIZE - INNER_POINT_SIZE) + INNER_POINT_SIZE
      ref.current.style.width = `${size}px`
      ref.current.style.height = `${size}px`

      const colorChannelScale = (1 - visibleScale) * 255
      child.style.backgroundColor = `rgba(${colorChannelScale}, ${colorChannelScale}, ${colorChannelScale}, 1)`
      result.push(1 - diff)
    }
    console.log(result)
  }
  useEffect(() => {
    onScroll()
    if (containerRef.current === null) return
    containerRef.current.addEventListener('scroll', onScroll)
    return () => {
      if (containerRef.current === null) return
      containerRef.current.removeEventListener('scroll', onScroll)
    }
  }, [stat])

  return (
    <Container ref={containerRef}>
      <ContentContainer ref={contentRef}>{children}</ContentContainer>
      <IndicatorContainer>
        <PointContainer ref={section1Ref}>
          <InnerPointContainer></InnerPointContainer>
        </PointContainer>
        <PointContainer ref={section2Ref}>
          <InnerPointContainer></InnerPointContainer>
        </PointContainer>
        <PointContainer ref={section3Ref}>
          <InnerPointContainer></InnerPointContainer>
        </PointContainer>
        <PointContainer ref={section4Ref}>
          <InnerPointContainer></InnerPointContainer>
        </PointContainer>
      </IndicatorContainer>
    </Container>
  )
}

export default SectionScrollProvider
