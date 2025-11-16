import styled from 'styled-components'
import ImageButton from '../../commons/ImageButton'
import PageSizeContainer from '../../commons/PageSizeContainer'

import surpriseBackgroundImage from '/images/surprise-background.png'
import greenWaveBackgroundImage from '/images/green-wave-background.png'
import rectRainBackgroundImage from '/images/rect-rain-background.png'
import LogoPadding from '../../commons/LogoPadding'
import Title from '../../commons/Title'
import ShowAtWidth from '../../commons/ShowAtWidth'
import HideAtWidth from '../../commons/HideAtWidth'

const ButtonContainerPositioner = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 20px;
  @media (max-width: 700px) {
    bottom: 35px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 0px 20px;
  gap: 20px;
  @media (max-width: 500px) {
    gap: 10px;
    padding: 0px 10px;
  }
`

const ButtonSizer = styled.div`
  width: 250px;
  height: 125px;

  @media (max-width: 700px) {
    width: 200px;
    height: 100px;
  }

  @media (max-width: 500px) {
    width: calc(50vw - 20px);
    height: calc(25vw - 10px);
  }
`

const TitlePositioner = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  padding: 50px 0px;
  @media (max-width: 700px) {
    padding: 20px 0px;
  }
  @media (max-width: 400px) {
    padding: 10px 0px;
  }
`

const MockCharacterImage = styled.div`
  transform: translateX(-50%);
  width: 100px;
  height: 200px;
  bottom: 0px;
  left: 50%;
  position: absolute;
  background-color: red;
`

const StyleTitle = styled(Title)`
  grid-template-columns: 1fr max-content calc(50vw + 100px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr max-content calc(50vw);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr max-content 1fr;
  }
`

const FinalSection = () => {
  return (
    <PageSizeContainer style={{ scrollSnapAlign: 'start', background: 'blue' }}>
      <LogoPadding>
        <TitlePositioner>
          <ShowAtWidth $width={700}>
            <StyleTitle scale={1}>
              START <br />
              YOUR <br />
              JOURNEY
            </StyleTitle>
          </ShowAtWidth>
          <HideAtWidth $width={700}>
            <StyleTitle scale={1.5}>
              START <br />
              YOUR <br />
              JOURNEY
            </StyleTitle>
          </HideAtWidth>
        </TitlePositioner>
        <MockCharacterImage />
        <ButtonContainerPositioner>
          <ButtonContainer>
            <ButtonSizer>
              <ImageButton
                title='EDITOR'
                titlePosition='bottom'
                backgroundImage={surpriseBackgroundImage}
              ></ImageButton>
            </ButtonSizer>
            <ButtonSizer>
              <ImageButton
                title='DOCUMENT'
                titlePosition='bottom'
                backgroundImage={greenWaveBackgroundImage}
              ></ImageButton>
            </ButtonSizer>
            <ButtonSizer>
              <ImageButton
                title='CONTACT'
                titlePosition='bottom'
                backgroundImage={rectRainBackgroundImage}
              ></ImageButton>
            </ButtonSizer>
          </ButtonContainer>
        </ButtonContainerPositioner>
      </LogoPadding>
    </PageSizeContainer>
  )
}

export default FinalSection
