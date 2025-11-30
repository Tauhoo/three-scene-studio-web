import styled from 'styled-components'
import ImageButton from './ImageButton'

const PopupImage = styled.img<{
  $titlePosition: 'left' | 'right' | 'top' | 'bottom'
}>`
  height: 100%;
  position: absolute;
  left: 50%;
  top: ${props =>
    props.$titlePosition === 'top'
      ? '70%'
      : props.$titlePosition === 'bottom'
      ? '35%'
      : '50%'};
  transform: translate(-50%, -50%);
  transition-duration: 0.3s;
`

const ContentLinkWrapper = styled.a`
  width: 100%;
  height: 100%;
  &:hover {
    & > * {
      transform: translate(-50%, -50%) scale(1.3);
    }
  }
`

type Props = {
  title: string
  backgroundImage: string
  popupImage: string
  titlePosition: 'left' | 'right' | 'top' | 'bottom'
  url: string
}

const PopupButton: React.FC<Props> = ({
  title,
  backgroundImage,
  titlePosition,
  popupImage,
  url,
}) => {
  return (
    <ImageButton
      title={title}
      backgroundImage={backgroundImage}
      titlePosition={titlePosition}
    >
      <ContentLinkWrapper href={url} target='_blank'>
        <PopupImage src={popupImage} $titlePosition={titlePosition} />
      </ContentLinkWrapper>
    </ImageButton>
  )
}

export default PopupButton
