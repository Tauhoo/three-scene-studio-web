import styled from 'styled-components'

const Container = styled.div<{ $scale: number }>`
  display: grid;
  grid-template-columns: ${({ $scale }) => 40 * $scale}px max-content 1fr;
  gap: 10px;
  justify-items: center;
  align-items: center;
`

const Text = styled.h1<{ $scale: number }>`
  color: white;
  font-size: ${({ $scale }) => 36 * $scale}px;
  margin: 0px;

  line-height: ${({ $scale }) => 42 * $scale}px;

  @media (max-width: 700px) {
    font-size: ${({ $scale }) => 28 * $scale}px;
    line-height: ${({ $scale }) => 32.5 * $scale}px;
  }
`

const Line = styled.div<{ $position: 'first' | 'last'; $scale: number }>`
  height: 5px;
  width: 100%;
  background-color: white;
  position: absolute;

  left: 0px;
  ${({ $position, $scale }) =>
    $position === 'first'
      ? `top: ${$scale * 18}px;`
      : `bottom: ${$scale * 19.5}px;`}
  @media (max-width: 700px) {
    ${({ $position, $scale }) =>
      $position === 'first'
        ? `top: ${$scale * 15.25}px`
        : `bottom: ${$scale * 12.56}px`}
  }
`

const LineContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

type Props = {
  className?: string
  scale?: number
}

const Title: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  scale: propsScale,
}) => {
  const scale = propsScale ?? 1
  return (
    <Container className={className} $scale={scale}>
      <LineContainer>
        <Line $position='first' $scale={scale} />
      </LineContainer>
      <Text $scale={scale}>{children}</Text>
      <LineContainer>
        <Line $position='last' $scale={scale} />
      </LineContainer>
    </Container>
  )
}

export default Title
