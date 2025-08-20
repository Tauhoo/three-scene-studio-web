import styled from 'styled-components'
import PageSizeContainer from '../../commons/PageSizeContainer'
import Title from '../../commons/Title'
import Paragraph from '../../commons/Paragraph'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 500px;
  padding-right: 35px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 400px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding-right: 0px;
    padding-bottom: 35px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;

  @media (max-width: 700px) {
    padding: 0px 10px;
  }
`

const AboutSection = () => {
  return (
    <PageSizeContainer
      style={{
        backgroundColor: 'red',
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
            style={{ height: '160px', width: '160px', backgroundColor: 'blue' }}
          ></div>
        </div>
        <TextContainer>
          <div>
            <Title>THE PROBLEM</Title>
            <Paragraph style={{ color: 'white' }}>
              To make 3D scene in website with pure coding is hard. You can make
              easy mistake or miss configure something.{' '}
            </Paragraph>
          </div>
          <div>
            <Title>WHAT IS IT ?</Title>
            <Paragraph style={{ color: 'white' }}>
              Three Scene Studio provides you online UI editor for 3D scene. You
              can export the scene and import it to your website project with
              our Javascript library. And, then everything done.
            </Paragraph>
          </div>
        </TextContainer>
      </Container>
    </PageSizeContainer>
  )
}

export default AboutSection
