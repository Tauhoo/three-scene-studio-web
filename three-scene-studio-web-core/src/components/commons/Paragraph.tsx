import styled from 'styled-components'

interface ParagraphProps {
  weight?: 'light' | 'regular' | 'bold'
}

const Paragraph = styled.div<ParagraphProps>`
  font-family: 'Azeret Mono', monospace;
  font-weight: ${props => {
    switch (props.weight) {
      case 'light':
        return 300
      case 'bold':
        return 700
      default:
        return 400
    }
  }};
  margin: 0;
`

export default Paragraph
