import { styled } from 'styled-components'
import ThreeDScene from './ThreeDScene'
import { useEffect, useRef } from 'react'
import { useScroll, type ScrollInfo } from '../../hooks/scrolling'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: -1;
  background: #424242;
  display: flex;
  justify-content: center;
  align-items: center;
`

type TargetPositionAndScale = {
  x: (rect: DOMRect) => number
  y: (rect: DOMRect) => number
  scale: number
}

const sectionOneTargetPositionAndScale = (
  rect: DOMRect
): TargetPositionAndScale => {
  if (window.innerWidth > 1000) {
    return {
      x: () => (window.innerWidth - 400) / 2 + 400,
      y: () => window.innerHeight / 2,
      scale: 1,
    }
  }

  if (window.innerWidth > 700) {
    return {
      x: () => (window.innerWidth - 300) / 2 + 300,
      y: () => window.innerHeight / 2,
      scale: 1,
    }
  }

  return {
    x: () => window.innerWidth / 2,
    y: () => window.innerHeight / 2,
    scale: 1,
  }
}

const sectionTwoTargetPositionAndScale = (
  rect: DOMRect
): TargetPositionAndScale => {
  if (window.innerWidth > 1000) {
    return {
      x: () => 500 / 2 + 30,
      y: () => window.innerHeight / 2 - 60,
      scale: 0.7,
    }
  }

  if (window.innerWidth > 900) {
    return {
      x: () => 500 / 2,
      y: () => window.innerHeight / 2 - 60,
      scale: 0.6,
    }
  }

  if (window.innerWidth > 700) {
    return {
      x: () => window.innerWidth / 2,
      y: () => (window.innerHeight * 0.3) / 2,
      scale: 0.5,
    }
  }

  return {
    x: () => window.innerWidth / 2,
    y: () => (window.innerHeight * 0.3) / 2,
    scale: 0.5,
  }
}

const sectionThreeTargetPositionAndScale = (
  rect: DOMRect
): TargetPositionAndScale => {
  if (window.innerWidth > 1000) {
    return {
      x: () => ((window.innerWidth - 70 - 20) / 3) * 2,
      y: () => (window.innerHeight - 140) / 2 - 20 / 2 + 140 - rect.height / 2,
      scale: 0.5,
    }
  }

  if (window.innerWidth > 700) {
    return {
      x: () => ((window.innerWidth - 70 - 20) / 3) * 2,
      y: () => (window.innerHeight - 101) / 2 - 20 / 2 + 101 - rect.height / 2,
      scale: 0.5,
    }
  }
  if (window.innerWidth > 500) {
    return {
      x: () => (window.innerWidth / 3) * 2,
      y: () =>
        (window.innerHeight - 89 - 35) / 2 - 10 / 2 + 89 - rect.height / 2,
      scale: 0.5,
    }
  }

  return {
    x: () => window.innerWidth / 2,
    y: () => window.innerHeight - rect.height / 2,
    scale: 1,
  }
}

const sectionFourTargetPositionAndScale = (
  rect: DOMRect
): TargetPositionAndScale => {
  return {
    x: () => window.innerWidth / 2,
    y: () => window.innerHeight / 2,
    scale: 1,
  }
}

const sectionTargetPositionAndScaleFunctionList = [
  sectionOneTargetPositionAndScale,
  sectionTwoTargetPositionAndScale,
  sectionThreeTargetPositionAndScale,
  sectionFourTargetPositionAndScale,
]

const Background3DScene = () => {
  const ref = useRef<HTMLDivElement>(null)
  const scrolling = useScroll()

  const update = (info: ScrollInfo) => {
    if (ref.current === null) return
    const rect = ref.current.getBoundingClientRect()
    const absoluteIndex = Math.floor(info.sectionIndex)
    const fraction = info.sectionIndex - absoluteIndex

    const currentTargetPositionAndScaleFunction =
      sectionTargetPositionAndScaleFunctionList[absoluteIndex]
    const nextTargetPositionAndScaleFunction =
      sectionTargetPositionAndScaleFunctionList[absoluteIndex + 1] ??
      currentTargetPositionAndScaleFunction
    const currentTargetPositionAndScale =
      currentTargetPositionAndScaleFunction(rect)
    const nextTargetPositionAndScale = nextTargetPositionAndScaleFunction(rect)
    const currentPositionAndScale = {
      x:
        currentTargetPositionAndScale.x(rect) +
        (nextTargetPositionAndScale.x(rect) -
          currentTargetPositionAndScale.x(rect)) *
          fraction,
      y:
        currentTargetPositionAndScale.y(rect) +
        (nextTargetPositionAndScale.y(rect) -
          currentTargetPositionAndScale.y(rect)) *
          fraction,
      scale:
        currentTargetPositionAndScale.scale +
        (nextTargetPositionAndScale.scale -
          currentTargetPositionAndScale.scale) *
          fraction,
    }

    console.log('Position and Scale Debug:', {
      current: {
        x: currentTargetPositionAndScale.x(rect),
        y: currentTargetPositionAndScale.y(rect),
        scale: currentTargetPositionAndScale.scale,
      },
      next: {
        x: nextTargetPositionAndScale.x(rect),
        y: nextTargetPositionAndScale.y(rect),
        scale: nextTargetPositionAndScale.scale,
      },
      interpolated: currentPositionAndScale,
    })
    ref.current.style.top = `${currentPositionAndScale.y}px`
    ref.current.style.left = `${currentPositionAndScale.x}px`
    ref.current.style.width = `${
      window.innerWidth * currentPositionAndScale.scale
    }px`
    ref.current.style.height = `${
      window.innerHeight * currentPositionAndScale.scale
    }px`
    ref.current.style.transform = `translate(-50%, -50%)`
  }

  const onResize = () => {
    const currentScroll = scrolling.getCurrentScroll()
    if (currentScroll === null) return
    update(currentScroll)
  }

  useEffect(() => {
    onResize()
    scrolling.addScrollListener(update)
    window.addEventListener('resize', onResize)
    return () => {
      scrolling.removeScrollListener(update)
      window.removeEventListener('resize', onResize)
    }
  }, [scrolling])
  return (
    <Container ref={ref}>
      <ThreeDScene />
    </Container>
  )
}

export default Background3DScene
