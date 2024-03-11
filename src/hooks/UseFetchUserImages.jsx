import { useEffect, useState } from 'react'
import { fetchUserImages } from '../services/fetchUserImages.js'

function useFetchUserImages ({ username, page, order }) {
  const [images, setImages] = useState([]) // Array of images

  const [maxPage, setMaxPage] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let res = await fetchUserImages({ username, page, order })

        if (res.errors) throw new Error('Error occurred: ' + res.errors[0])
        if (res.response?.results?.length === 0) throw new Error('Not found')

        const { results, total } = res.response
        setImages(results)
        setMaxPage(Math.floor(total / 24) + 1)
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchPhotos()

    return () => {
      // Reset values when unmounting
      setImages([])
      setLoading(true)
      setError(false)
    }
  }, [username, order, page])

  return { images, maxPage, error, loading }
}

export default useFetchUserImages
