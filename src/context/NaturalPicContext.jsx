
import { createContext, useState, useEffect } from 'react'

export const NaturalPicContext = createContext()

// eslint-disable-next-line react/prop-types
const NaturalPicProvider = ({ children }) => {

  const [photos, setPhotos] = useState([])

  const getData = async () => {
    const response = await fetch('../public/photos.json')
    const data = await response.json()
    const allData = data.photos.map((photo) => ({...photo, like: false}))
    console.log(allData)
    setPhotos(allData)
  }

  useEffect(() => {
    getData()
  }, [])

  const toggleLike = (id) => {
    setPhotos(photos => 
      photos.map(photo => 
        photo.id === id ? { ...photo, liked: !photo.liked } : photo
      )
    );
  }

  return (
    <NaturalPicContext.Provider value={{ photos,toggleLike }}>
      {children}
    </NaturalPicContext.Provider>
  )
}

export default NaturalPicProvider
