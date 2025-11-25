import { styled } from 'styled-components'
import ThreeDScene from './ThreeDScene'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #424242;
`

const Background3DScene = () => {
  return (
    <Container>
      <ThreeDScene />
    </Container>
  )
}

export default Background3DScene
