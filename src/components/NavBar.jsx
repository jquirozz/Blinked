import { NavLink } from 'react-router-dom'

import './NavBar.scss'
import { BsSearch, BsNutFill, BsPersonSquare } from 'react-icons/bs'

function NavBar () {
  return (
    <nav className='NavBar'>
      <header>
        <NavLink to='/'>
          <img src='/logo/min/pink.png' alt='small pink Blinked logo' />
        </NavLink>
        <NavLink to='/explore'>
          <BsSearch />
        </NavLink>
      </header>
      <footer>
        <NavLink to='/configuration'>
          <BsNutFill />
        </NavLink>
        <NavLink to='/profile'>
          <BsPersonSquare />
        </NavLink>
      </footer>
    </nav>
  )
}

export default NavBar
