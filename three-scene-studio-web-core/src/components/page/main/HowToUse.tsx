import styled from 'styled-components'
import PageSizeContainer from '../../commons/PageSizeContainer'
import Title from '../../commons/Title'

const LogoPadding = styled.div`
  height: 100%;
  scroll-snap-align: start;
  padding-top: 100px;

  @media (max-width: 1000px) {
    padding-top: 81px;
  }

  @media (max-width: 700px) {
    padding-top: 46.5px;
  }
`

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 70px;
  padding-right: 35px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding-right: 0px;
    padding-bottom: 35px;
  }
`

const InnerContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media (max-width: 700px) {
    grid-template-rows: max-content 1fr;
  }
`

const PanelContainer = styled.div`
  height: 100%;
  padding: 20px;
  gap: 20px;
  display: grid;
  @media (max-width: 700px) {
    padding: 10px;
    gap: 10px;
  }

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const VerticalTitleContainer = styled.div`
  position: relative;
  height: 100%;
  display: block;
  @media (max-width: 700px) {
    display: none;
  }
`

const VerticalTitleRotator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  width: 100vh;
`

const HorizontalTitleContainer = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`

const HowToUse = () => {
  return (
    <PageSizeContainer style={{ backgroundColor: 'black' }}>
      <Container>
        <LogoPadding>
          <InnerContainer>
            <HorizontalTitleContainer>
              <Title>HOW TO USE IT</Title>
            </HorizontalTitleContainer>
            <PanelContainer>
              <div style={{ backgroundColor: 'white' }}></div>
              <div
                style={{ backgroundColor: 'white', gridColumn: 'span 2' }}
              ></div>
              <div style={{ backgroundColor: 'white' }}></div>
              <div style={{ backgroundColor: 'white' }}></div>
              <div style={{ backgroundColor: 'white' }}></div>
            </PanelContainer>
          </InnerContainer>
        </LogoPadding>
        <VerticalTitleContainer>
          <VerticalTitleRotator>
            <Title>HOW TO USE IT</Title>
          </VerticalTitleRotator>
        </VerticalTitleContainer>
      </Container>
    </PageSizeContainer>
  )
}

export default HowToUse
