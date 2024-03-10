import { Link } from 'react-router-dom'
import './NotFound.scss'

function NotFound () {
  return (
    <div className='NotFound'>
      <Link to='/'>
        <h2>Go Home</h2>
      </Link>
    </div>
  )
}

export default NotFound
