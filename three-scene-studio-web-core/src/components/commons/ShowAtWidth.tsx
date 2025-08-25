import styled from 'styled-components'

const ShowAtWidth = styled.div<{ $width: number; $inline?: boolean }>`
  @media (max-width: ${({ $width }) => $width}px) {
    display: ${({ $inline }) => ($inline ? 'inline' : 'block')};
  }
  display: none;
`
export default ShowAtWidth
