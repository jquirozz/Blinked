import { useEffect, useState } from 'react'

import TopInfo from './TopInfo'
import Menu from './Menu'
import BottomBar from './BottomBar'
import Description from './Description'
import Tags from './Tags'

import './style/MainCard.scss'

function MainCard ({ item, setTopic }) {
  const [menu, setMenu] = useState()

  // general
  const { width, height, description, alt_description, tags } = item
  // user
  const { username } = item.user
  // images
  const { small_s3 } = item.urls

  useEffect(() => {
    const newTags = item?.tags
    if (newTags && newTags.length > 0) {
      const first = newTags[0]
      setTopic(first.title)
    }
  }, [setTopic, item])

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
