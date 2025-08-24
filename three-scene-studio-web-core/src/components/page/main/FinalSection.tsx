import styled from 'styled-components'
import ImageButton from '../../commons/ImageButton'
import PageSizeContainer from '../../commons/PageSizeContainer'

import brightBackgroundImage from '/images/bright-background.png'
import blueGreenNoiseBackgroundImage from '/images/blue-green-noise-background.png'
import LogoPadding from '../../commons/LogoPadding'
import Title from '../../commons/Title'

const ButtonContainerPositioner = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 0px 20px;
  gap: 20px;
`

const ButtonSizer = styled.div`
  width: 250px;
  height: 140px;
  @media (max-width: 700px) {
    width: 200px;
    height: 120px;
  }

  @media (max-width: 500px) {
    width: 140px;
    height: 80px;
  }
`

const TitlePositioner = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  padding: 50px 0px;
`

const MockCharacterImage = styled.div`
  transform: translateX(-50%);
  width: 300px;
  height: 600px;
  bottom: 0px;
  left: 50%;
  position: absolute;
  background-color: red;
`

const FinalSection = () => {
  return (
    <PageSizeContainer style={{ scrollSnapAlign: 'start', background: 'blue' }}>
      <LogoPadding>
        <TitlePositioner>
          <Title>
            START <br />
            YOUR <br />
            JOURNEY
          </Title>
        </TitlePositioner>
        <MockCharacterImage />
        <ButtonContainerPositioner>
          <ButtonContainer>
            <ButtonSizer>
              <ImageButton
                title='EDITOR'
                titlePosition='bottom'
                backgroundImage={brightBackgroundImage}
              ></ImageButton>
            </ButtonSizer>
            <ButtonSizer>
              <ImageButton
                title='EDITOR'
                titlePosition='bottom'
                backgroundImage={blueGreenNoiseBackgroundImage}
              ></ImageButton>
            </ButtonSizer>
            <ButtonSizer>
              <ImageButton
                title='EDITOR'
                titlePosition='bottom'
                backgroundImage={brightBackgroundImage}
              ></ImageButton>
            </ButtonSizer>
          </ButtonContainer>
        </ButtonContainerPositioner>
      </LogoPadding>
    </PageSizeContainer>
  )
}

export default FinalSection
