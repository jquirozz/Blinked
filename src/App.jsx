// Modules
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Home from './pages/home/Home'
import User from './pages/user/User'
import Single from './pages/single/Single'

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
              element={
                <Home
                  topic={topic}
                  setTopic={setTopic}
                  page={page}
                  setPage={setPage}
                />
              }
            />
            <Route
              path='/search/:query'
              element={
                <Home
                  topic={topic}
                  setTopic={setTopic}
                  page={page}
                  setPage={setPage}
                />
              }
            />
            <Route path='/user/:username' element={<User />} />
            <Route path='/id/:id' element={<Single />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
