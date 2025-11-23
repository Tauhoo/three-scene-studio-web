import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: aqua;
  z-index: -1;
`

const Background3DScene = () => {
  return <Container></Container>
}

export default Background3DScene
