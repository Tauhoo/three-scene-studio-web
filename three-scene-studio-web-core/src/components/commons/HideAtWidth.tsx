import styled from 'styled-components'

const HideAtWidth = styled.div<{ $width: number; $inline?: boolean }>`
  @media (max-width: ${({ $width }) => $width}px) {
    display: none;
  }
  display: ${({ $inline }) => ($inline ? 'inline' : 'block')};
`

export default HideAtWidth
