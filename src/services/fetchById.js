import { createApi } from 'unsplash-js'

const KEY = 'NFA38si_LllBDsWyomiqO9-XP4rRfAZJRAiB8fY5ZCA'
const unsplash = createApi({ accessKey: KEY })

export const fetchById = async ({ id }) => {
  return unsplash.photos.get({
    photoId: id
  })
}
