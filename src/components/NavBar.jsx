import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import SearchBar from './SearchBar'

import './style/NavBar.scss'
import { FaUnsplash } from 'react-icons/fa6'
import { IoMenu, IoClose } from 'react-icons/io5'

function NavBar ({ topic, setTopic, setPage }) {
  const [show, setShow] = useState(true)

  const handleMenu = () => setShow(!show)
  const handleGoHome = () => {
    setTopic('')
    setPage(1)
  }

  return (
    <nav className='NavBar'>
      <Link to='/' className='title' onClick={handleGoHome}>
        <img src='/logo/white.png' alt='Blinked logo' />
      </Link>

      <SearchBar topic={topic} setTopic={setTopic} setPage={setPage} />

      <aside className='linkList'>
        <div className='menu' onClick={handleMenu}>
          {!show ? <IoMenu /> : <IoClose />}
        </div>
        {show && (
          <div className='list'>
            <Link
              to='https://unsplash.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h3>Unsplash</h3>
              <FaUnsplash />
            </Link>
            <NavLink to='/profile' className='pfp'>
              <h3>My profile</h3>
              <img src='/nopfp.webp' alt='Profile picture' />
            </NavLink>
          </div>
        )}
      </aside>
    </nav>
  )
}

export default NavBar
