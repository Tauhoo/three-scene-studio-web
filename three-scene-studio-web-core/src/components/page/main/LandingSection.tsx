import styled from 'styled-components'
import Paragraph from '../../commons/Paragraph'
import surpriseBackgroundImage from '/images/surprise-background.png'
import greenWaveBackgroundImage from '/images/green-wave-background.png'
import hammerImage from '/images/hammer.png'
import bookStackImage from '/images/book-stack.png'
import { useScreenSize } from '../../../hooks/screenSize'
import PageSizeContainer from '../../commons/PageSizeContainer'
import PopupButton from '../../commons/PopupButton'

const Container = styled.div`
  width: 400px;
  height: 100%;
  scroll-snap-align: start;
  background-color: white;
  display: grid;
  grid-template-rows: max-content 1fr;

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
  width: 400px;
  height: 240px;
  @media (max-width: 1000px) {
    width: 300px;
    height: 183px;
  }
  // start mobile mode
  @media (max-width: 700px) {
    width: 180px;
    height: 119.5px;
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
    gap: 15px;
  }
`

const MenuButtonContainer = styled.div<{ $align: 'left' | 'right' }>`
  width: 100%;
  padding: ${props =>
    props.$align === 'left' ? '0px 30px 0px 0px' : '0px 0px 0px 30px'};
  aspect-ratio: 2 / 1;

  @media (max-width: 700px) {
    padding: 0px;
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
    padding: 35px 0px;
    gap: 20px;
  }
`

const LandingSection = () => {
  const { width } = useScreenSize()
  return (
    <PageSizeContainer>
      <Container>
        <TopSection>
          <TitleContainer></TitleContainer>
          <DescriptionContainer>
            <Paragraph $weight='regular'>
              Make 3D on your website easier with online editor tool.
            </Paragraph>
          </DescriptionContainer>
        </TopSection>
        <MenuButtonGroupContainer>
          <MenuButtonContainer $align='right'>
            <PopupButton
              title='EDITOR'
              backgroundImage={surpriseBackgroundImage}
              titlePosition={width > 700 ? 'left' : 'bottom'}
              popupImage={hammerImage}
            />
          </MenuButtonContainer>
          <MenuButtonContainer $align='left'>
            <PopupButton
              title='DOCUMENT'
              backgroundImage={greenWaveBackgroundImage}
              titlePosition={width > 700 ? 'right' : 'bottom'}
              popupImage={bookStackImage}
            />
          </MenuButtonContainer>
        </MenuButtonGroupContainer>
      </Container>
    </PageSizeContainer>
  )
}

export default LandingSection
