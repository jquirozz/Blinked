import { useEffect, useState } from 'react'

import UseFetchImages from '../../../../hooks/UseFetchImages'
import { fetchById } from '../../../../services/fetchById'

import Loading from '../../../../components/Loading'
import NotFound from '../../../NotFound'

import TopInfo from './TopInfo'
import Menu from './Menu'
import BottomBar from './BottomBar'
import Description from './Description'
import Tags from './Tags'

import './style/MainCard.scss'

function MainCard ({ id, setTopic }) {
  const [menu, setMenu] = useState()
  const { item, error, loading } = UseFetchImages({
    id,
    fetchBy: fetchById
  })

  useEffect(() => {
    const newTags = item?.tags
    if (newTags && newTags.length > 0) {
      const first = newTags[0]
      setTopic(first.title)
    }
  }, [setTopic, item])

  if (loading) return <Loading />
  if (error) return <NotFound />

  // general
  const { width, height, description, alt_description, tags } = item
  // user
  const { username } = item.user
  // images
  const { small_s3 } = item.urls

  return (
    <section className='MainCard'>
      <TopInfo item={item} menu={menu} setMenu={setMenu} />
      {menu && <Menu item={item} setMenu={setMenu} />}
      <img
        className='mainImage'
        style={{ aspectRatio: width / height }}
        src={small_s3}
        alt={alt_description}
      />
      <BottomBar item={item} />
      <footer className='cardFooter'>
        <Description
          username={username}
          description={description}
          alt_description={alt_description}
        />
        <Tags tags={tags} />
      </footer>
    </section>
  )
}

export default MainCard
