import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useScroll, type ScrollInfo } from '../../hooks/scrolling'

const OFFSET_FROM_SCREEN = 10
const POINT_SIZE = 15
const INNER_POINT_SIZE = 10

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

const ScrollIndicator: React.FC = () => {
  const scrolling = useScroll()
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const section4Ref = useRef<HTMLDivElement>(null)

  // scroll event handle
  const onScroll = (info: ScrollInfo) => {
    const sectionProgressNumber = info.sectionIndex
    const refs = [section1Ref, section2Ref, section3Ref, section4Ref]

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
    }
  }

  useEffect(() => {
    const initScrollInfo = scrolling.getCurrentScroll()
    if (initScrollInfo !== null) onScroll(initScrollInfo)
    scrolling.addScrollListener(onScroll)
    return () => {
      scrolling.removeScrollListener(onScroll)
    }
  }, [scrolling])

  return (
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
  )
}

export default ScrollIndicator
