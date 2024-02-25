import { useCallback, useEffect, useState } from 'react'
import { fetchByQuery } from '../services/fetchByQuery'

function UseFetchImages ({ fetchBy, id, query, page, order }) {
  const [item, setItem] = useState({}) // One Picture
  const [images, setImages] = useState([]) // Array of images

  const [maxPage, setMaxPage] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchPhotos = useCallback(async () => {
    // Reset values
    setLoading(true)
    setError(false)

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

        // Delete later
        console.log(res.response)
      }
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [id, query, order, page, fetchBy])

  useEffect(() => {
    fetchPhotos()
  }, [fetchPhotos])

  return { item, images, maxPage, error, loading }
}

export default UseFetchImages
