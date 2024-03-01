import { NavLink } from 'react-router-dom'

import './NavBar.scss'
import { BsHouse, BsSearch, BsPersonCircle } from 'react-icons/bs'

function NavBar () {
  return (
    <nav className='NavBar'>
      <header>
        <NavLink to='/' >
          <BsHouse />
        </NavLink>
        <NavLink to='/explore'>
          <BsSearch />
        </NavLink>
      </header>
      <footer>
        <NavLink to='/profile'>
          <BsPersonCircle />
        </NavLink>
      </footer>
    </nav>
  )
}

export default NavBar
