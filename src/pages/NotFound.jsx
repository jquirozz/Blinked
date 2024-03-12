import { Link } from 'react-router-dom'

import './NotFound.scss'
import { GoAlert } from 'react-icons/go'

function NotFound () {
  return (
    <div className='NotFound'>
      <header>
        <GoAlert />
      </header>
      <footer>
        <section>
          <h2>NOT FOUND</h2>
          <h3>or no data provided</h3>
        </section>
        <Link to='/'>
          <h4>GO HOME</h4>
        </Link>
      </footer>
    </div>
  )
}

export default NotFound
