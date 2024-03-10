// Modules
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Home from './pages/home/Home'

// Components
import NavBar from './components/NavBar'

// Style
import './App.scss'

function App () {
  const [topic, setTopic] = useState('')
  const [page, setPage] = useState(1)

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar topic={topic} setTopic={setTopic} setPage={setPage} />
        <div className='display'>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route
              path='/'
              element={<Home topic={topic} page={page} setPage={setPage} />}
            />
            <Route
              path='/search/:query'
              element={<Home topic={topic} page={page} setPage={setPage} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
