import styled from 'styled-components'
import PageSizeContainer from '../../commons/PageSizeContainer'
import Title from '../../commons/Title'
import Paragraph from '../../commons/Paragraph'
import HideAtWidth from '../../commons/HideAtWidth'
import ShowAtWidth from '../../commons/ShowAtWidth'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 500px 1fr;
  padding-right: 35px;

  @media (max-width: 1000px) {
    grid-template-columns: 400px 1fr;
  }

  @media (max-width: 700px) {
    padding-right: 0px;
    padding-bottom: 35px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 45dvh 1fr;
  }

  @media (max-width: 600px) {
    grid-template-rows: 40dvh 1fr;
  }

  @media (max-width: 400px) {
    grid-template-rows: 35dvh 1fr;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px;
  gap: 30px;
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
  @media (max-width: 700px) {
    padding: 0px 10px;
  }

  @media (max-width: 400px) {
    gap: 10px;
  }
`

const TopicContainer = styled.div`
  display: grid;
  gap: 20px;
  @media (max-width: 600px) {
    gap: 10px;
  }
`

const AboutSection = () => {
  return (
    <PageSizeContainer style={{ scrollSnapAlign: 'start' }}>
      <Container>
        <div></div>
        <TextContainer>
          <HideAtWidth $width={900}>
            <TopicContainer>
              <Title>THE PROBLEM</Title>
              <Paragraph style={{ color: 'white' }}>
                Building 3D for the web takes longer than it should. Teams burn
                time on plumbing and trial-and-error instead of content.
              </Paragraph>
              <Paragraph style={{ color: 'white' }}>
                Three.js setup is fragile—scene, renderer, canvas, and loops. It
                takes time to configure everything and keep the code organized.
              </Paragraph>
              <Paragraph style={{ color: 'white' }}>
                Adjusting objects, cameras, and lights in code is tough without
                real-time feedback.
                <HideAtWidth $width={1050} $inline>
                  And when you import a glTF scene from other software, you
                  often have to retune the lighting (and more) in code.
                </HideAtWidth>
              </Paragraph>
            </TopicContainer>
          </HideAtWidth>
          <ShowAtWidth $width={900}>
            <TopicContainer>
              <Title>THE PROBLEM</Title>
              <Paragraph style={{ color: 'white' }}>
                Web 3D takes longer than it should: Three.js setup{' '}
                <HideAtWidth $width={700} $inline>
                  (scene, renderer, canvas, loops)
                </HideAtWidth>{' '}
                is fragile and time-consuming, and keeping it organized eats
                time. Adjusting objects, cameras, and lights in code lacks
                real-time feedback
                <HideAtWidth $width={700} $inline>
                  , and imported glTF scenes still need re-tuning—especially
                  lighting
                </HideAtWidth>
                .
              </Paragraph>
            </TopicContainer>
          </ShowAtWidth>

          <HideAtWidth $width={900}>
            <TopicContainer>
              <Title>THE SOLUTION</Title>
              <Paragraph style={{ color: 'white' }}>
                Three Scene Studio is a web editor for Three.js. Preview and
                refine in the browser.
              </Paragraph>
              <Paragraph style={{ color: 'white' }}>
                Import your models and tweak lights, cameras, and object
                transforms with real-time feedback.
              </Paragraph>
              <Paragraph style={{ color: 'white' }}>
                When you're ready, export a single file and load it with our
                SDK. Your scene renders exactly as authored in the editor.{' '}
                <HideAtWidth $width={1050} $inline>
                  so you skip re-tuning in code and ship faster.
                </HideAtWidth>
              </Paragraph>
            </TopicContainer>
          </HideAtWidth>
          <ShowAtWidth $width={900}>
            <TopicContainer>
              <Title>THE SOLUTION</Title>
              <Paragraph style={{ color: 'white' }}>
                Three Scene Studio is a web editor for Three.js—import models,
                tweak{' '}
                <HideAtWidth $width={700} $inline>
                  lights/cameras/transforms
                </HideAtWidth>
                with real-time feedback, then export a single file and load it
                with our SDK for exact, as-authored results.
              </Paragraph>
            </TopicContainer>
          </ShowAtWidth>
        </TextContainer>
      </Container>
    </PageSizeContainer>
  )
}

export default AboutSection
