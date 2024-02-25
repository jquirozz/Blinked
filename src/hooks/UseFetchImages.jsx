// Fecth images by query
// Without params it will fetch popular pictures

import { useCallback, useEffect, useState } from 'react'
import { fetchByQuery } from '../services/fetchByQuery'

function UseFetchImages ({ setArray, fetchBy, query, page, order }) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchPhotos = useCallback(async () => {
    // Reset values
    setError(false)
    try {
      let res = []
      if (fetchBy) {
        res = await fetchBy({ query, page, order })
      } else {
        res = await fetchByQuery({ query, page, order })
      }

      // Check if the is any error
      if (res.errors) throw new Error('Error occurred: ' + res.errors[0])

      // Destructuring response
      const { results, total, total_pages } = res.response
      console.log(results)
      console.table({ total, total_pages })

      // Set value to the setState in param
      setArray(results)
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [query, order, page, setArray, fetchBy])

  useEffect(() => {
    fetchPhotos()
  }, [fetchPhotos])

  return { error, loading }
}

export default UseFetchImages
