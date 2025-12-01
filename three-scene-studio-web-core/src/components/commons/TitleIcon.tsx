import styled from 'styled-components'
import cImage from '/images/characters/c.svg'
import dImage from '/images/characters/d.svg'
import eImage from '/images/characters/e.svg'
import hImage from '/images/characters/h.svg'
import iImage from '/images/characters/i.svg'
import nImage from '/images/characters/n.svg'
import oImage from '/images/characters/o.svg'
import rImage from '/images/characters/r.svg'
import sImage from '/images/characters/s.svg'
import tImage from '/images/characters/t.svg'
import uImage from '/images/characters/u.svg'
import { useEffect, useRef } from 'react'
import { useScroll, type Callback } from '../../hooks/scrolling'
import { useScreenSize } from '../../hooks/screenSize'
import { zIndex } from '../../constants/layout'

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: grid;
  gap: 10px;

  background-color: black;
  overflow: hidden;
  z-index: ${zIndex.TITLE_ICON};
  cursor: pointer;

  @media (max-width: 700px) {
    top: 10px;
    left: 10px;
  }
`

const LineContainer = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;

  @media (max-width: 700px) {
    gap: 5px;
  }
`

const Char = styled.img`
  height: 60px;

  @media (max-width: 1000px) {
    height: 41px;
  }

  @media (max-width: 700px) {
    height: 26.5px;
  }
`

const TitleIcon = () => {
  const scrolling = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef1 = useRef<HTMLDivElement>(null)
  const lineRef2 = useRef<HTMLDivElement>(null)
  const lineRef3 = useRef<HTMLDivElement>(null)
  const screenSize = useScreenSize()

  const onScroll: Callback = ({ sectionIndex }) => {
    console.log('DEBUG: title icon onScroll index', sectionIndex)

    if (
      lineRef1.current === null ||
      lineRef2.current === null ||
      lineRef3.current === null ||
      containerRef.current === null
    )
      return

    const characterSize =
      screenSize.width > 1000 ? 60 : screenSize.width > 700 ? 41 : 26.5
    const lineGap = 10
    const lineHeight = characterSize + lineGap
    const offset =
      screenSize.width > 1000 ? 20 : screenSize.width > 700 ? 20 : 10
    const containerHeight =
      screenSize.width > 1000 ? 240 : screenSize.width > 700 ? 183 : 119.5
    const containerWidth =
      screenSize.width > 1000 ? 400 : screenSize.width > 700 ? 300 : 180

    const sectionProgress = sectionIndex
    const scale = 1 - Math.min(sectionProgress, 1)
    const lines = [lineRef1.current, lineRef2.current, lineRef3.current]
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index]
      line.style.top = `${index * lineHeight * scale + offset}px`
      line.style.left = `${offset}px`

      const children = [...line.children]
      for (let index = 1; index < children.length; index++) {
        const child = children[index] as HTMLDivElement
        const childScale = 1 - Math.min(sectionProgress * 2, 1)
        child.style.opacity = `${childScale}`
      }
    }
    containerRef.current.style.height = `${
      scale * (containerHeight - (characterSize + offset * 2)) +
      (characterSize + offset * 2)
    }px`
    containerRef.current.style.width = `${
      scale * (containerWidth - (characterSize + offset * 2)) +
      (characterSize + offset * 2)
    }px`
  }

  useEffect(() => {
    const scrollingInfo = scrolling.getCurrentScroll()
    if (scrollingInfo) onScroll(scrollingInfo)
    scrolling.addScrollListener(onScroll)
    return () => {
      scrolling.removeScrollListener(onScroll)
    }
  }, [scrolling, screenSize])

  const onClick = () => {
    scrolling.scrollToTop()
  }

  return (
    <Container ref={containerRef} onClick={onClick}>
      <LineContainer ref={lineRef1}>
        <Char src={tImage} />
        <Char src={hImage} />
        <Char src={rImage} />
        <Char src={eImage} />
        <Char src={eImage} />
      </LineContainer>
      <LineContainer ref={lineRef2}>
        <Char src={sImage} />
        <Char src={cImage} />
        <Char src={eImage} />
        <Char src={nImage} />
        <Char src={eImage} />
      </LineContainer>
      <LineContainer ref={lineRef3}>
        <Char src={sImage} />
        <Char src={tImage} />
        <Char src={uImage} />
        <Char src={dImage} />
        <Char src={iImage} />
        <Char src={oImage} />
      </LineContainer>
    </Container>
  )
}

export default TitleIcon
