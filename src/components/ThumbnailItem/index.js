// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActiveImgItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onClickThumbnail = () => {
    isActiveImgItem(id)
  }

  const isActiveThumbnail = isActive ? 'isActive img' : 'isActive'

  return (
    <li className="galleryItem">
      <button type="button" className="btn" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isActiveThumbnail}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
