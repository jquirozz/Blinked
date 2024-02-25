import { useCallback, useEffect, useState } from 'react'
import { fetchByQuery } from '../services/fetchByQuery'

function UseFetchImages ({ fetchBy, query, page, order }) {
  const [images, setImages] = useState([])
  const [maxPage, setMaxPage] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchPhotos = useCallback(async () => {
    // Reset values
    setLoading(true)
    setError(false)

    try {
      let res = fetchBy
        ? await fetchBy({ query, page, order })
        : await fetchByQuery({ query, page, order })
      if (res.errors) throw new Error('Error occurred: ' + res.errors[0])

      const { results, total, total_pages } = res.response
      setImages(results)
      setMaxPage(total_pages)
      console.log(results)
      console.table({ total, total_pages })
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [query, order, page, fetchBy])

  useEffect(() => {
    fetchPhotos()
  }, [fetchPhotos])

  return { images, maxPage, error, loading }
}

export default UseFetchImages
