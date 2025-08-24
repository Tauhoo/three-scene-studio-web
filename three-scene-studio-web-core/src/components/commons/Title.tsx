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
  margin: 0px;

  line-height: 42px;
  @media (max-width: 1000px) {
    font-size: 36px;
  }

  @media (max-width: 700px) {
    font-size: 28px;
    line-height: 32.5px;
  }
`

const Line = styled.div<{ $position: 'first' | 'last' }>`
  height: 5px;
  width: 100%;
  background-color: white;
  position: absolute;

  left: 0px;
  ${({ $position }) => ($position === 'first' ? 'top: 18px;' : 'bottom: 19px;')}
  @media (max-width: 700px) {
    ${({ $position }) =>
      $position === 'first' ? 'top: 16.25px' : 'bottom: 16.25px'}
  }
`

const LineContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <LineContainer>
        <Line $position='first' />
      </LineContainer>
      <Text>{children}</Text>
      <LineContainer>
        <Line $position='last' />
      </LineContainer>
    </Container>
  )
}

export default Title
