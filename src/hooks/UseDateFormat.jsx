import { useEffect, useState } from 'react'

function UseDateFormat ({ item }) {
  const [date, setDate] = useState(null)

  useEffect(() => {
    if (item && item.updated_at) {
      const newDate = new Date(item.updated_at)
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      setDate(newDate.toLocaleDateString('en-US', options)) // Monday, September 17, 2023
    }
  }, [item, setDate])
  return { date }
}

export default UseDateFormat
