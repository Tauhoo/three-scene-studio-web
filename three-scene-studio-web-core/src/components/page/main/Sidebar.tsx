import styled from 'styled-components'
import titleImage from '/title.svg'
import Paragraph from '../../commons/Paragraph'
import ImageButton from '../../commons/ImageButton'
import brightBackgroundImage from '/images/bright-background.png'
import blueGreenNoiseBackgroundImage from '/images/blue-green-noise-background.png'

const Container = styled.div`
  width: 500px;
  height: 100vh;
  background-color: white;

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
  padding: 20px;

  // start mobile mode
  @media (max-width: 700px) {
    padding: 10px;
  }
`

const TopSection = styled.div`
  width: 100%;

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
  height: 180px;
  padding: ${props =>
    props.align === 'left' ? '0px 30px 0px 0px' : '0px 0px 0px 30px'};
`

const Sidebar = () => {
  return (
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
      <MenuButtonContainer align='right'>
        <ImageButton
          title='EDITOR'
          titlePosition='left'
          backgroundImage={brightBackgroundImage}
        ></ImageButton>
      </MenuButtonContainer>
      <MenuButtonContainer align='left'>
        <ImageButton
          title='DOCUMENT'
          titlePosition='right'
          backgroundImage={blueGreenNoiseBackgroundImage}
        ></ImageButton>
      </MenuButtonContainer>
    </Container>
  )
}

export default Sidebar
