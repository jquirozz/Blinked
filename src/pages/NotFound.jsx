import { Link } from 'react-router-dom'
import './NotFound.scss'

function NotFound () {
  return (
    <div className='NotFound'>
      <header>
        <img src='/logo/min/pink.png' alt='Pink Blinked logo' />
        <div className='text'>
          <h2>OOPS!</h2>
          <h3>Page not found</h3>
        </div>
      </header>
      <Link to='/'>
        <h2>Go Home</h2>
      </Link>
    </div>
  )
}

export default NotFound
