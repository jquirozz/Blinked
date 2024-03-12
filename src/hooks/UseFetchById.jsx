import { useEffect, useState } from 'react'
import { fetchById } from '../services/fetchById'

function UseFetchById ({ id }) {
  const [item, setItem] = useState({})

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let res = await fetchById({ id })
        if (res.errors) throw new Error('Error occurred: ' + res.errors[0])

        if (res.response) {
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
      setLoading(true)
      setError(false)
    }
  }, [id])

  return { item, error, loading }
}

export default UseFetchById
