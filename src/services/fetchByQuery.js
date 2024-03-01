import { createApi } from 'unsplash-js'

const KEY = 'NFA38si_LllBDsWyomiqO9-XP4rRfAZJRAiB8fY5ZCA'
const unsplash = createApi({ accessKey: KEY })

export const fetchByQuery = async ({
  query = '',
  page = 1,
  order = 'popular'
}) => {
  let searchQuery = query
  if (searchQuery === '') {
    searchQuery = 'photos'
  }

  try {
    const response = await unsplash.search.getPhotos({
      query: searchQuery,
      page,
      perPage: 14,
      order_by: order
    })
    return response
  } catch (error) {
    console.error('Error fetching photos:', error)
    throw error
  }
}
