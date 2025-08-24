import styled from 'styled-components'
const LogoPadding = styled.div`
  height: 100%;
  scroll-snap-align: start;
  padding-top: 100px;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 81px;
  }

  @media (max-width: 700px) {
    padding-top: 46.5px;
  }
`
export default LogoPadding
