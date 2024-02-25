import { Link } from 'react-router-dom'
import DragLine from '../../../components/DragLine'
import './style/Tags.scss'

function Tags ({ tags }) {
  if (tags) {
    return (
      <DragLine>
        {tags.map((tag, key) => (
          <Link to={`/explore/${tag.title}`} className='tag' key={key}>
            #{tag.title}
          </Link>
        ))}
      </DragLine>
    )
  }
}

export default Tags
