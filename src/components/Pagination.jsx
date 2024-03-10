import './style/Pagination.scss'

function Pagination ({ page, setPage, maxPage }) {
  const renderPageButtons = () => {
    const buttons = []
    const range = 2 // Adjust the range as needed

    for (
      let i = Math.max(1, page - range);
      i <= Math.min(maxPage, page + range);
      i++
    ) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={i === page ? 'active' : ''}
        >
          <h5>{i}</h5>
        </button>
      )
    }

    return buttons
  }

  return <div className='Pagination'>{renderPageButtons()}</div>
}

export default Pagination
