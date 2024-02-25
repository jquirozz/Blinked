import { createApi } from 'unsplash-js'

const KEY = 'NFA38si_LllBDsWyomiqO9-XP4rRfAZJRAiB8fY5ZCA'
const unsplash = createApi({ accessKey: KEY })

export const fetchByQuery = async ({ query, page, order }) => {
  return unsplash.search.getPhotos({
    query: query || 'photos',
    page: page || 1,
    perPage: 20,
    order_by: order || 'popular'
  })
}
