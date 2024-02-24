import { Outlet } from 'react-router'

import './Configuration.scss'
import { BsMoonFill, BsFillInfoSquareFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const OPTIONS = [
  {
    text: 'Theme',
    url: 'theme',
    svg: <BsMoonFill />
  },
  {
    text: 'About',
    url: 'about',
    svg: <BsFillInfoSquareFill />
  }
]

function Configuration () {
  return (
    <div className='Configuration'>
      <aside>
        {OPTIONS.map(({ text, url, svg }) => (
          <NavLink to={url} key={url}>
            {svg} <h3>{text}</h3>
          </NavLink>
        ))}
      </aside>
      <Outlet />
    </div>
  )
}

export default Configuration
