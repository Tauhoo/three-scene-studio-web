import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`

const Point = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ $active }) => ($active ? 'white' : 'gray')};
  transition-duration: 0.3s;
`

type Props = {
  steps: number
  currentStep: number
}

const PointScrollIndicator: React.FC<Props> = ({ steps, currentStep }) => {
  return (
    <Container>
      {Array(steps)
        .fill(1)
        .map((_, index) => {
          return (
            <Point
              key={`point-scroll-indicator-point-${index}`}
              $active={currentStep === index}
            ></Point>
          )
        })}
    </Container>
  )
}

export default PointScrollIndicator
