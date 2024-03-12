import { useEffect, useState } from 'react'
import { fetchUser } from '../services/fetchUser.js'

function UseFetchUser ({ username }) {
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let res = await fetchUser({ username })

        if (res.errors) throw new Error('Error occurred: ' + res.errors[0])
        if (!res.response) throw new Error('Not found')

        console.log(res.response)
        setUser(res.response)
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
      setUser({})
      setLoading(true)
      setError(false)
    }
  }, [username])

  return { user, loading, error }
}

export default UseFetchUser
