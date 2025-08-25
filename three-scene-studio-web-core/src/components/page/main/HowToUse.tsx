import styled from 'styled-components'
import PageSizeContainer from '../../commons/PageSizeContainer'
import Title from '../../commons/Title'
import LogoPadding from '../../commons/LogoPadding'

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

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr repeat(3, 1fr);
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
  position: relative;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }

  @media (max-width: 500px) {
    min-height: 150px;
    height: 25vh;
    width: 100%;
    background-color: green;
  }
`

const Banner = styled.div`
  background-color: white;
  grid-column: span 2;
  @media (max-width: 500px) {
    grid-column: span 1;
    display: none;
  }
`

const TitlePositioner = styled.div`
  @media (max-width: 500px) {
    position: absolute;
    bottom: 8px;
    left: 0px;
    width: 100%;
  }
`

const AvoidPaddingLogoPadding = styled(LogoPadding)`
  @media (max-width: 500px) {
    padding-top: 0px;
  }
`

const HowToUse = () => {
  return (
    <PageSizeContainer style={{ backgroundColor: 'black' }}>
      <Container>
        <AvoidPaddingLogoPadding>
          <InnerContainer>
            <HorizontalTitleContainer>
              <TitlePositioner>
                <Title>HOW TO USE IT</Title>
              </TitlePositioner>
            </HorizontalTitleContainer>
            <PanelContainer>
              <div style={{ backgroundColor: 'white' }}></div>
              <Banner />
              <div style={{ backgroundColor: 'white' }}></div>
              <div style={{ backgroundColor: 'white' }}></div>
              <div style={{ backgroundColor: 'white' }}></div>
            </PanelContainer>
          </InnerContainer>
        </AvoidPaddingLogoPadding>
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
