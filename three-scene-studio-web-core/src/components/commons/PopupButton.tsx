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
  &:hover {
    transform: translate(-50%, -50%) scale(1.3);
  }
`

type Props = {
  title: string
  backgroundImage: string
  popupImage: string
  titlePosition: 'left' | 'right' | 'top' | 'bottom'
}

const PopupButton: React.FC<Props> = ({
  title,
  backgroundImage,
  titlePosition,
  popupImage,
}) => {
  return (
    <ImageButton
      title={title}
      backgroundImage={backgroundImage}
      titlePosition={titlePosition}
    >
      <PopupImage src={popupImage} $titlePosition={titlePosition} />
    </ImageButton>
  )
}

export default PopupButton
