import { abrNum } from '../../../services/abrNum'

import './HeaderInfo.scss'

function HeaderInfo ({ user }) {
  const MAIN_INFO = [
    {
      text: 'Posts',
      value: abrNum(user.total_photos, 1)
    },
    {
      text: 'Followers',
      value: abrNum(user.followers_count, 1)
    },
    {
      text: 'Following',
      value: abrNum(user.following_count, 1)
    }
  ]

  return (
    <div className='HeaderInfo'>
      <img src={user.profile_image?.large} alt={`${user.name} profile`} />
      <section className='main'>
        <div className='stats'>
          {MAIN_INFO.map(({ text, value }, key) => (
            <section key={key}>
              <h3>{value}</h3>
              <h4>{text}</h4>
            </section>
          ))}
        </div>
        <div className='info'>
          <h2>
            <span className='name'>{user.name}</span>
            <span>·</span>
            <span className='username'>@{user.username}</span>
          </h2>
          {user.bio && <p>{user.bio}</p>}
        </div>
      </section>
    </div>
  )
}

export default HeaderInfo
