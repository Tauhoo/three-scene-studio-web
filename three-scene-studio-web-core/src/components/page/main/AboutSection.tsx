import styled from 'styled-components'
import PageSizeContainer from '../../commons/PageSizeContainer'
import Title from '../../commons/Title'
import Paragraph from '../../commons/Paragraph'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 480px 1fr;
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
    grid-template-rows: 45vh 1fr;
  }

  @media (max-width: 600px) {
    grid-template-rows: 40vh 1fr;
  }

  @media (max-width: 400px) {
    grid-template-rows: 35vh 1fr;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 30px;
  @media (max-width: 900px) {
    justify-content: flex-start;
    gap: 30px;
    padding: 0px 10px;
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
    <PageSizeContainer
      style={{
        backgroundColor: 'black',
        scrollSnapAlign: 'start',
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: '160px',
              width: '160px',
              backgroundColor: 'white',
            }}
          ></div>
        </div>
        <TextContainer>
          <TopicContainer>
            <Title>THE PROBLEM</Title>
            <Paragraph style={{ color: 'white' }}>
              To make 3D scene in website with pure coding is hard. You can make
              easy mistake or miss configure something.{' '}
            </Paragraph>
          </TopicContainer>
          <TopicContainer>
            <Title>WHAT IS IT ?</Title>
            <Paragraph style={{ color: 'white' }}>
              Three Scene Studio provides you online UI editor for 3D scene. You
              can export the scene and import it to your website project with
              our Javascript library. And, then everything done.
            </Paragraph>
          </TopicContainer>
        </TextContainer>
      </Container>
    </PageSizeContainer>
  )
}

export default AboutSection
