import { useEffect, useState } from 'react'
import { fetchByQuery } from '../services/fetchByQuery'

function UseFetchImages ({ fetchBy, id, query, page, order }) {
  const [item, setItem] = useState({}) // One Picture
  const [images, setImages] = useState([]) // Array of images

  const [maxPage, setMaxPage] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let res = fetchBy
          ? await fetchBy({ id, query, page, order })
          : await fetchByQuery({ query, page, order })
        if (res.errors) throw new Error('Error occurred: ' + res.errors[0])

        if (res.response.results) {
          const { results, total_pages } = res.response
          setImages(results)
          setMaxPage(total_pages)
        } else {
          setItem(res.response)
        }
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
      setItem({})
      setImages([])
      setLoading(true)
      setError(false)
    }
  }, [id, query, order, page, fetchBy])

  return { item, images, maxPage, error, loading }
}

export default UseFetchImages
