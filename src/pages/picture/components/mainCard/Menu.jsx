import { Link, useLocation } from 'react-router-dom'

import { abrNum } from '../../../../services/abrNum.js'
import { copyUrl } from '../../../../services/copyUrl.js'

import './style/Menu.scss'
import { FaUnsplash, FaRegEye, FaRegHeart } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa6'

function Menu ({ item, setMenu }) {
  const location = useLocation()

  const { views, likes } = item

  const INFO = [
    {
      text: 'Views',
      output: abrNum(views, 1),
      svg: <FaRegEye />
    },
    {
      text: 'Likes',
      output: abrNum(likes, 1),
      svg: <FaRegHeart />
    }
  ]

  const BUTTONS = [
    {
      text: 'Copy link',
      isLink: false,
      function: () => copyUrl(location),
      svg: <FaLink />
    },
    {
      text: 'Unsplash',
      isLink: true,
      url: item?.links?.html,
      svg: <FaUnsplash />
    }
  ]

  return (
    <div className='Menu' onClick={() => setMenu(false)}>
      <header>
        {INFO.map((i, key) => (
          <div className='show' key={key}>
            {i.svg}
            <footer>
              <h2>{i.output}</h2>
            </footer>
          </div>
        ))}
      </header>

      {BUTTONS.map((i, key) =>
        i.isLink ? (
          <Link to={i.url} onClick={() => setMenu(false)} key={key}>
            {i.svg}
            <h3>{i.text}</h3>
          </Link>
        ) : (
          <button onClick={i.function} key={key}>
            {i.svg}
            <h3>{i.text}</h3>
          </button>
        )
      )}
    </div>
  )
}

export default Menu
