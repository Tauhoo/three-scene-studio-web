import styled from 'styled-components'
import titleImage from '/title.svg'
import Paragraph from '../../commons/Paragraph'
import ImageButton from '../../commons/ImageButton'
import brightBackgroundImage from '/images/bright-background.png'
import blueGreenNoiseBackgroundImage from '/images/blue-green-noise-background.png'
import { useScreenSize } from '../../../hooks/screenSize'
import PageSizeContainer from '../../commons/PageSizeContainer'

const Container = styled.div`
  width: 500px;
  height: 100%;
  scroll-snap-align: start;
  background-color: white;
  display: grid;
  grid-template-rows: max-content 1fr;

  @media (max-width: 1200px) {
    width: 400px;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }

  // start mobile mode
  @media (max-width: 700px) {
    width: 100%;
    background-color: transparent;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  background-color: black;
  padding: 20px;
  overflow: hidden;

  // start mobile mode
  @media (max-width: 700px) {
    padding: 10px;
  }
`

const DescriptionContainer = styled.div`
  width: 100%;
  padding: 0px 20px;

  // start mobile mode
  @media (max-width: 700px) {
    padding: 0px 10px;
  }
`

const TopSection = styled.div`
  width: 100%;
  display: grid;
  gap: 30px;

  @media (max-width: 1200px) {
    width: 400px;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }

  // start mobile mode
  @media (max-width: 700px) {
    width: 200px;
    background-color: transparent;
    padding: 10px;
  }
`

const MenuButtonContainer = styled.div<{ align: 'left' | 'right' }>`
  width: 100%;
  height: 100%;
  padding: ${props =>
    props.align === 'left' ? '0px 30px 0px 0px' : '0px 0px 0px 30px'};
  max-height: 180px;

  @media (max-width: 1000px) {
    max-height: 160px;
  }

  @media (max-width: 700px) {
    padding: 0px;
    height: 120px;
  }
`

const MenuButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
  gap: 30px;

  @media (max-width: 700px) {
    flex-direction: row;
    align-items: flex-end;
  }

  @media (max-width: 1000px) {
    gap: 30px;
  }
`

const LandingSection = () => {
  const { width } = useScreenSize()
  return (
    <PageSizeContainer>
      <Container>
        <TopSection>
          <TitleContainer>
            <img src={titleImage} alt='title' style={{ width: '100%' }} />
          </TitleContainer>
          <DescriptionContainer>
            <Paragraph weight='regular'>
              Make 3D on your website easier with online editor tool.
            </Paragraph>
          </DescriptionContainer>
        </TopSection>
        <MenuButtonGroupContainer>
          <MenuButtonContainer align='right'>
            <ImageButton
              title='EDITOR'
              titlePosition={width > 700 ? 'left' : 'bottom'}
              backgroundImage={brightBackgroundImage}
            ></ImageButton>
          </MenuButtonContainer>
          <MenuButtonContainer align='left'>
            <ImageButton
              title='DOCUMENT'
              titlePosition={width > 700 ? 'right' : 'bottom'}
              backgroundImage={blueGreenNoiseBackgroundImage}
            ></ImageButton>
          </MenuButtonContainer>
        </MenuButtonGroupContainer>
      </Container>
    </PageSizeContainer>
  )
}

export default LandingSection
