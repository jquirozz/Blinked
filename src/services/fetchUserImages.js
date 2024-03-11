import { createApi } from 'unsplash-js'

const KEY = 'NFA38si_LllBDsWyomiqO9-XP4rRfAZJRAiB8fY5ZCA'
const unsplash = createApi({ accessKey: KEY })

export const fetchUserImages = async ({ username, page }) => {
  try {
    const response = await unsplash.users.getPhotos({
      username,
      page,
      perPage: 24,
      order_by: 'popular'
    })
    return response
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}
