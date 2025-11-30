import styled from 'styled-components'
import aboutBackgroundImage from '/images/section-backgrounds/about-background.png'
import endingBackgroundImage from '/images/section-backgrounds/ending-background.png'
import landingBackgroundImage from '/images/section-backgrounds/landing-background.png'
import howToBannerBackgroundImage from '/images/how-to-banners/how-to-banner-background.png'
import { useScroll, type ScrollInfo } from '../../hooks/scrolling'
import { useEffect, useState } from 'react'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`

const ImageBackground = styled.img<{ $opacity: number }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$opacity};
  transition-duration: 0.3s;
  position: absolute;
  top: 0px;
  left: 0px;
`

const DarkBackground = styled.div<{ $opacity: number }>`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: ${props => props.$opacity};
  transition-duration: 0.3s;
  position: absolute;
  top: 0px;
  left: 0px;
`

const Background = () => {
  const scrolling = useScroll()
  const [scrollIndex, setScrollIndex] = useState(0)

  const onScroll = (info: ScrollInfo) => {
    setScrollIndex(Math.round(info.sectionIndex))
  }
  useEffect(() => {
    const currentScroll = scrolling.getCurrentScroll()
    if (currentScroll !== null) setScrollIndex(currentScroll.sectionIndex)
    scrolling.addScrollListener(onScroll)
    return () => {
      scrolling.removeScrollListener(onScroll)
    }
  }, [])

  return (
    <Container>
      <ImageBackground
        src={landingBackgroundImage}
        $opacity={scrollIndex === 0 ? 1 : 0}
      />
      <ImageBackground
        src={aboutBackgroundImage}
        $opacity={scrollIndex === 1 ? 1 : 0}
      />
      <DarkBackground $opacity={scrollIndex === 2 ? 1 : 0} />
      <ImageBackground
        src={endingBackgroundImage}
        $opacity={scrollIndex === 3 ? 1 : 0}
      />
    </Container>
  )
}

export default Background
