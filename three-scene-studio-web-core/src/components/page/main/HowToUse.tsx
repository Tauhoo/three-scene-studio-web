import styled from 'styled-components'
import PageSizeContainer from '../../commons/PageSizeContainer'
import Title from '../../commons/Title'
import LogoPadding from '../../commons/LogoPadding'
import importSceneBanner from '/images/how-to-banners/import-scene-banner.webp'
import setupSceneBanner from '/images/how-to-banners/setup-scene-banner.webp'
import tssEditBanner from '/images/how-to-banners/tss-edit-banner.webp'
import uploadFileToCloudBanner from '/images/how-to-banners/upload-file-to-cloud-banner.webp'
import howToUseBackgroundImage from '/images/section-backgrounds/how-to-banner-background.webp'
import { zIndex } from '../../../constants/layout'

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

  @media (max-width: 500px) {
    /* background-color: black; */
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
  width: 100dvh;
`

const HorizontalTitleContainer = styled.div`
  position: relative;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }

  @media (max-width: 500px) {
    min-height: 150px;
    height: 25dvh;
    width: 100%;
  }
`

const Banner = styled.div`
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

const StepContainer = styled.div`
  position: relative;
`

const StepNumber = styled.div`
  color: #000000;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`

const StepContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  gap: 10px;

  @media (max-width: 500px) {
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr;
  }
`

const StepFooter = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 10px;
`

const StepDescription = styled.div`
  color: white;
`

const HollowBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  & > .background-image {
    position: absolute;
    object-fit: cover;
    z-index: ${zIndex.BACKGROUND};
  }

  & > .mask-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* Adjust this height to control the mask's vertical size */
    background: black;
  }
  & > .mask-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    /* Adjust this height to control the mask's vertical size */
    background: black;
  }
  & > .mask-left {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    background: black;
  }
  & > .mask-right {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background: black;
  }

  & > .mask-top {
    height: ${100 + 20}px;
  }

  & > .mask-bottom {
    height: calc((100dvh - (100px + 20px) - 20px - 20px) / 2 + 20px + 20px);
  }

  & > .mask-left {
    width: calc((100dvw - 20px - (20px + 70px + 35px) + 20px) / 3 + 20px);
  }

  & > .mask-right {
    width: ${35 + 70 + 20}px;
  }

  & > .background-image {
    height: calc(
      100dvh - ${100 + 20}px -
        ((100dvh - (100px + 20px) - 20px - 20px) / 2 + 20px + 20px)
    );
    width: calc(
      100dvw - ((100dvw - 20px - (20px + 70px + 35px) + 20px) / 3 + 20px) -
        ${35 + 70 + 20}px
    );
    left: calc((100dvw - 20px - (20px + 70px + 35px) + 20px) / 3 + 20px);
    top: ${100 + 20}px;
  }

  @media (max-width: 1000px) {
    & > .mask-top {
      height: ${100}px;
    }

    & > .mask-bottom {
      height: calc((100dvh - (100px + 20px) - 20px) / 2 + 20px + 20px);
    }

    & > .background-image {
      height: calc(
        100dvh - ${100}px - ((100dvh - (100px + 20px) - 20px) / 2 + 20px + 20px)
      );
      top: ${100}px;
    }
  }

  @media (max-width: 700px) {
    & > .mask-bottom {
      height: calc((100dvh - (100px + 20px) - 20px) / 2 + 20px + 28px);
    }

    & > .mask-left {
      width: calc((100dvw - 10px - 10px + 10px) / 3 + 10px);
    }

    & > .mask-right {
      width: 10px;
    }

    & > .background-image {
      width: calc(100dvw - ((100dvw - 10px - 10px + 10px) / 3 + 10px) - 10px);
      left: calc((100dvw - 10px - 10px + 10px) / 3 + 10px);
    }
  }

  @media (max-width: 500px) {
    & > .mask {
      display: none;
    }
    & > .background-image {
      top: 0px;
      left: 0px;
      height: 25;
      min-height: 150px;
      width: 100%;
    }
  }
`

const StepImage = styled.img`
  object-fit: contain;
  width: 100%;
  aspect-ratio: 829/500;
  @media (max-width: 500px) {
    width: auto;
    height: 100px;
  }

  @media (max-width: 360px) {
    width: auto;
    height: 60px;
  }
`

const MaskBackground = styled.div`
  width: 100%;
  height: 75dvh;
  max-height: calc(100dvh - 150px);
  background-color: black;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`

const HowToUse = () => {
  return (
    <PageSizeContainer style={{ position: 'relative' }}>
      <HollowBackground>
        <div className='mask-top mask'></div>
        <div className='mask-bottom mask'></div>
        <div className='mask-left mask'></div>
        <div className='mask-right mask'></div>
        <img
          className='background-image'
          src={howToUseBackgroundImage}
          style={{ position: 'absolute', objectFit: 'cover' }}
        />
      </HollowBackground>
      <MaskBackground></MaskBackground>
      <Container>
        <AvoidPaddingLogoPadding>
          <InnerContainer>
            <HorizontalTitleContainer>
              <TitlePositioner>
                <Title>HOW TO USE IT</Title>
              </TitlePositioner>
            </HorizontalTitleContainer>
            <PanelContainer>
              <StepContainer>
                <StepContent>
                  <StepImage src={setupSceneBanner} />
                  <StepFooter>
                    <StepNumber>1</StepNumber>
                    <StepDescription>
                      Set up scene in Blender and export GLTF file.
                    </StepDescription>
                  </StepFooter>
                </StepContent>
              </StepContainer>
              <Banner />
              <StepContainer>
                <StepContent>
                  <StepImage src={tssEditBanner} />
                  <StepFooter>
                    <StepNumber>2</StepNumber>
                    <StepDescription>
                      Adjust and export scene in Three Scene Studio editor.
                    </StepDescription>
                  </StepFooter>
                </StepContent>
              </StepContainer>
              <StepContainer>
                <StepContent>
                  <StepImage src={uploadFileToCloudBanner} />
                  <StepFooter>
                    <StepNumber>3</StepNumber>
                    <StepDescription>
                      Upload final TSS result file to public internet.
                    </StepDescription>
                  </StepFooter>
                </StepContent>
              </StepContainer>
              <StepContainer>
                <StepContent>
                  <StepImage src={importSceneBanner} />
                  <StepFooter>
                    <StepNumber>4</StepNumber>
                    <StepDescription>
                      Import the scene to your website with SDK.
                    </StepDescription>
                  </StepFooter>
                </StepContent>
              </StepContainer>
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
