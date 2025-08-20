import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 40px max-content 1fr;
  gap: 10px;
  justify-items: center;
  align-items: center;
`

const Text = styled.h1`
  color: white;
  font-size: 36px;
  @media (max-width: 1000px) {
    font-size: 36px;
  }

  @media (max-width: 700px) {
    font-size: 28px;
  }
`

const Line = styled.div`
  height: 5px;
  width: 100%;
  background-color: white;
`

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Line />
      <Text>{children}</Text>
      <Line />
    </Container>
  )
}

export default Title
