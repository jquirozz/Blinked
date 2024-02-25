import './Pagination.scss'
import { IoArrowUndoOutline, IoArrowRedoOutline } from 'react-icons/io5'

function Pagination ({ page, maxPage, setPage }) {
  const handleBack = () => {
    page > 1 && setPage(page - 1)
  }
  const handleForward = () => {
    page < maxPage && setPage(page + 1)
  }

  return (
    <div className='Pagination'>
      <button className={page === 1 && 'noClick'} onClick={handleBack}>
        <IoArrowUndoOutline />
      </button>
      <h3>{page}</h3>
      <button className={page === maxPage && 'noClick'} onClick={handleForward}>
        <IoArrowRedoOutline />
      </button>
    </div>
  )
}

export default Pagination
