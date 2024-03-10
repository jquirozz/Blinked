import { createApi } from 'unsplash-js'

const KEY = 'NFA38si_LllBDsWyomiqO9-XP4rRfAZJRAiB8fY5ZCA'
const unsplash = createApi({ accessKey: KEY })

export const fetchByQuery = async ({ query = '', page = 1 }) => {
  let searchQuery = query
  if (searchQuery === '') {
    searchQuery = 'photos'
  }

  try {
    const response = await unsplash.search.getPhotos({
      query: searchQuery,
      page,
      perPage: 16,
      order_by: 'popular'
    })
    return response
  } catch (error) {
    console.error('Error fetching photos:', error)
    throw error
  }
}
