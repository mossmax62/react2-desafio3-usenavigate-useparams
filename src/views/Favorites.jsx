import { useContext } from "react"
import { NaturalPicContext } from "../context/NaturalPicContext"
import IconHeart from "../components/IconHeart"

const Favorites = () => {
  const { photos, toggleLike } = useContext(NaturalPicContext)
  return (

      <div className='gallery grid-columns-5 p-3' >
      {photos.filter((photo) => photo.liked).map((photo) => (
        <div key={photo.id} className='card'  onClick={() => toggleLike(photo.id)}>
          <img src={photo.src.tiny} alt={photo.alt} />
          <div className='card-body'>
            <h4>{photo.photographer}</h4>
            <IconHeart filled={photo.liked}  />
          </div>
        </div>
      ))}
      </div>
  )
}
export default Favorites
