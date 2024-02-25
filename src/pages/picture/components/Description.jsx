import './style/Description.scss'

function Description ({ username, description, alt_description }) {
  if (description || alt_description) {
    return (
      <p className='Description'>
        <span className='user'>{username}</span>
        <span className='dot'>•</span>
        <span className='text'>{description || alt_description}</span>
      </p>
    )
  }
}

export default Description
