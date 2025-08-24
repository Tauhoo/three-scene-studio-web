import styled from 'styled-components'
import ImageButton from '../../commons/ImageButton'
import PageSizeContainer from '../../commons/PageSizeContainer'

import brightBackgroundImage from '/images/bright-background.png'
import blueGreenNoiseBackgroundImage from '/images/blue-green-noise-background.png'

const ButtonContainerPositioner = styled.div`
  display: flex;
  justify-content: center;
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

const FinalSection = () => {
  return (
    <PageSizeContainer
      style={{
        backgroundColor: 'red',
        scrollSnapAlign: 'start',
      }}
    >
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
    </PageSizeContainer>
  )
}

export default FinalSection
