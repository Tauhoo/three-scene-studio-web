import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {
  NumberValue,
  ReferrableVariable,
  ThreeSceneStudioManager,
} from 'three-scene-studio-core'
import { useScroll, type ScrollInfo } from '../../hooks/scrolling'
import { useThreeSceneStudio } from '../../hooks/threeSceneStudio'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const totalFrameDuration = 250

type AnimationStateInfo = {
  startFrame: number
  repeatStartFrame: number
  repeatEndFrame: number
  repeatDuration: number
}
const animationInfoList: AnimationStateInfo[] = [
  {
    startFrame: 0,
    repeatStartFrame: 20,
    repeatEndFrame: 57,
    repeatDuration: 57 - 20,
  },
  {
    startFrame: 57,
    repeatStartFrame: 100,
    repeatEndFrame: 120,
    repeatDuration: 120 - 100,
  },
  {
    startFrame: 120,
    repeatStartFrame: 140,
    repeatEndFrame: 180,
    repeatDuration: 180 - 140,
  },
  {
    startFrame: 180,
    repeatStartFrame: 200,
    repeatEndFrame: 250,
    repeatDuration: 250 - 200,
  },
]

const animationSpeed = 0.008

type AnimationState =
  | { type: 'INIT'; currentFrame: number }
  | {
      type: 'IDLE'
      loopDuration: number
      currentLoopFrame: number
      startFrame: number
    }
  | {
      type: 'TRANSITION'
      currentLoopFrame: number
      startFrame: number
    }

const ThreeDScene = () => {
  const animationStateRef = useRef<AnimationState>({
    type: 'INIT',
    currentFrame: 0,
  })

  const ref = useRef<HTMLDivElement | null>(null)
  const scrolling = useScroll()
  const { manager, loading } = useThreeSceneStudio()

  const setup = (manager: ThreeSceneStudioManager) => {
    if (loading) return () => {}

    const animationVariable =
      manager.variableManager.variableStorage.getVariableByRef('animation')

    if (
      !(
        animationVariable instanceof ReferrableVariable &&
        animationVariable.value instanceof NumberValue
      )
    )
      return () => {}

    const cameraOffsetVariable =
      manager.variableManager.variableStorage.getVariableByRef('cam_offset')

    if (
      !(
        cameraOffsetVariable instanceof ReferrableVariable &&
        cameraOffsetVariable.value instanceof NumberValue
      )
    )
      return () => {}

    const cameraOffsetValue: NumberValue = cameraOffsetVariable.value
    const animationValue: NumberValue = animationVariable.value
    cameraOffsetValue.set(1)
    animationValue.set(0)

    const onTick = (data: { delta: number }) => {
      let state = animationStateRef.current

      if (state.type === 'INIT') {
        const firstStartFrame = animationInfoList[0].repeatStartFrame
        state.currentFrame += data.delta * animationSpeed
        if (firstStartFrame <= state.currentFrame) {
          scrolling.unlockScroll()
          state = {
            type: 'IDLE',
            loopDuration: animationInfoList[0].repeatDuration,
            startFrame: animationInfoList[0].repeatStartFrame,
            currentLoopFrame: state.currentFrame - firstStartFrame,
          }
          animationStateRef.current = state
          // update frame
          const frame = state.currentLoopFrame + state.startFrame
          animationValue.set(frame / totalFrameDuration)
        } else {
          // update frame
          const frame = state.currentFrame
          animationValue.set(frame / totalFrameDuration)
        }
      }

      if (state.type === 'IDLE') {
        state.currentLoopFrame += data.delta * animationSpeed
        if (state.currentLoopFrame >= state.loopDuration) {
          state.currentLoopFrame = 0
        }

        // update frame
        const frame = state.currentLoopFrame + state.startFrame
        animationValue.set(frame / totalFrameDuration)
      }

      if (state.type === 'TRANSITION') {
        state.currentLoopFrame -= data.delta * animationSpeed * 100
        if (state.currentLoopFrame <= 0) {
          state.currentLoopFrame = 0
        }
      }
    }

    if (ref.current !== null)
      ref.current.appendChild(manager.context.canvasContainer)
    manager.clock.addListener('TICK', onTick)
    return () => {
      if (ref.current !== null)
        ref.current.removeChild(manager.context.canvasContainer)
      manager.clock.removeListener('TICK', onTick)
    }
  }

  useEffect(() => {
    return setup(manager)
  }, [loading])

  const previousIndexRef = useRef<number>(0)
  const onScroll = (info: ScrollInfo) => {
    if (ref.current === null) return

    // set animation start time
    let state = animationStateRef.current
    if (state.type === 'INIT') return
    const absoluteIndex = Math.floor(info.sectionIndex)
    const firstStartFrame =
      animationInfoList?.[absoluteIndex]?.repeatStartFrame ?? 0
    const firstLoopDuration =
      animationInfoList?.[absoluteIndex]?.repeatDuration ?? 0
    const secondStartFrame =
      animationInfoList?.[absoluteIndex + 1]?.repeatStartFrame ??
      firstStartFrame
    const indexFraction = info.sectionIndex - absoluteIndex
    const startFrame =
      firstStartFrame + (secondStartFrame - firstStartFrame) * indexFraction

    if (state.type === 'IDLE' && indexFraction !== 0) {
      state = {
        type: 'TRANSITION',
        currentLoopFrame: state.currentLoopFrame,
        startFrame: startFrame,
      }
      animationStateRef.current = state
    }

    if (state.type === 'TRANSITION') {
      if (indexFraction === 0) {
        state = {
          type: 'IDLE',
          startFrame: firstStartFrame,
          currentLoopFrame: state.currentLoopFrame,
          loopDuration: firstLoopDuration,
        }
        animationStateRef.current = state
      } else {
        state.startFrame = startFrame
      }
    }

    // update animation frame
    const frame = state.currentLoopFrame + state.startFrame
    const animationProgress = frame / totalFrameDuration
    const animationVariable =
      manager.variableManager.variableStorage.getVariableByRef('animation')
    if (
      !(
        animationVariable instanceof ReferrableVariable &&
        animationVariable.value instanceof NumberValue
      )
    )
      return
    const animationValue: NumberValue = animationVariable.value
    animationValue.set(animationProgress)
  }

  useEffect(() => {
    const scrollInfo = scrolling.getCurrentScroll()
    previousIndexRef.current = scrollInfo?.sectionIndex ?? 0
    if (scrollInfo !== null) onScroll(scrollInfo)
    scrolling.addScrollListener(onScroll)
    return () => {
      scrolling.removeScrollListener(onScroll)
    }
  }, [scrolling])

  return <Container ref={ref}></Container>
}

export default ThreeDScene
