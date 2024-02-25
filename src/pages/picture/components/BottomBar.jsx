import { saveAs } from 'file-saver'

import Like from '../../../components/buttons/Like'

import './style/BottomBar.scss'
import { BiSolidDownload } from 'react-icons/bi'

function BottomBar ({ item }) {
  // general
  const { alt_description, tags } = item
  // likes
  const { liked_by_user } = item
  // links
  const { download } = item.links

  return (
    <section className='BottomBar'>
      <Like init={liked_by_user} />
      <aside>
        <button onClick={() => saveAs(download, `${alt_description}.jpeg`)}>
          <BiSolidDownload />
        </button>
      </aside>
    </section>
  )
}

export default BottomBar
