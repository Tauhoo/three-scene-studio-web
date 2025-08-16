import styled from 'styled-components'
import React from 'react'

const Container = styled.div<{ backgroundImage: string }>`
  width: 100%;
  height: 200px;
  background-color: #07cd17;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

const BottomTitleContainer = styled.div`
  width: 100%;
  background-color: #000000;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  color: white;
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`

export type Props = {
  title: string
  backgroundImage: string
}

const ImageButton: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  backgroundImage,
  children,
}) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <BottomTitleContainer>{title}</BottomTitleContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )
}

export default ImageButton
