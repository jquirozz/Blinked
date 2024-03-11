import { createApi } from 'unsplash-js'

const KEY = 'NFA38si_LllBDsWyomiqO9-XP4rRfAZJRAiB8fY5ZCA'
const unsplash = createApi({ accessKey: KEY })

export const fetchUser = async ({ username }) => {
  try {
    const response = await unsplash.users.get({ username })
    return response
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}
