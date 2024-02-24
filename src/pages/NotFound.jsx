import { Link } from 'react-router-dom'
import './NotFound.scss'

function NotFound () {
  return (
    <div className='NotFound'>
      <header>
        <img src='/logo/min/pink.png' alt='' />
        <h2>OOPS!</h2>
        <h3>Page not found</h3>
      </header>
      <Link to='/'>
        <h2>Go back</h2>
      </Link>
    </div>
  )
}

export default NotFound
