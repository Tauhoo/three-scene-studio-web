import styled from 'styled-components'
import React from 'react'

const Container = styled.div<{ backgroundImage: string }>`
  width: 100%;
  height: 100%;
  background-color: #07cd17;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  border: none;
`

const TitleContainer = styled.div<{
  position: 'top' | 'bottom' | 'left' | 'right'
}>`
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  color: white;
  position: absolute;
  top: ${props =>
    props.position === 'top'
      ? '0px'
      : props.position === 'bottom'
      ? 'auto'
      : '0px'};
  left: ${props =>
    props.position === 'left'
      ? '0px'
      : props.position === 'right'
      ? 'auto'
      : '0px'};
  bottom: ${props =>
    props.position === 'top'
      ? 'auto'
      : props.position === 'bottom'
      ? '0px'
      : '0px'};
  right: ${props =>
    props.position === 'right'
      ? '0px'
      : props.position === 'left'
      ? 'auto'
      : 'auto'};
  width: ${props =>
    props.position === 'left' || props.position === 'right' ? '30px' : '100%'};
  height: ${props =>
    props.position === 'top' || props.position === 'bottom' ? '30px' : '100%'};

  @media (max-width: 700px) {
    font-size: 18px;

    width: ${props =>
      props.position === 'left' || props.position === 'right'
        ? '24px'
        : '100%'};
    height: ${props =>
      props.position === 'top' || props.position === 'bottom'
        ? '24px'
        : '100%'};
  }
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
  titlePosition: 'left' | 'right' | 'top' | 'bottom'
  onClick?: () => void
  containerStyles?: React.CSSProperties
}

const ImageButton: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  backgroundImage,
  children,
  titlePosition,
  onClick,
  containerStyles,
}) => {
  return (
    <Container
      backgroundImage={backgroundImage}
      onClick={onClick}
      style={containerStyles}
    >
      <TitleContainer position={titlePosition}>
        {titlePosition === 'left' || titlePosition === 'right' ? (
          <div style={{ transform: 'rotate(-90deg)' }}>{title}</div>
        ) : (
          <div>{title}</div>
        )}
      </TitleContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )
}

export default ImageButton
