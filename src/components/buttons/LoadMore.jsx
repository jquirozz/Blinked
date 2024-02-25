import './LoadMore.scss'

function LoadMore ({ page, setPage }) {

  const handlePage = () => {
    setPage(page + 1)
  }

  return (
    <button className='LoadMore' onClick={handlePage}>
      <h2>Load More</h2>
    </button>
  )
}

export default LoadMore
