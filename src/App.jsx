import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Recent from './pages/recent/Recent'
import Explore from './pages/explore/Explore'
import Profile from './pages/profile/Profile'

import Configuration from './pages/configuration/Configuration'
import Theme from './pages/configuration/components/Theme'
import About from './pages/configuration/components/About'

import NavBar from './components/NavBar'

import './App.scss'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className='display'>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Recent />} />
            <Route path='/explore' element={<Explore />}>
              <Route path=':search' element={null} />
            </Route>
            <Route path='/profile' element={<Profile />} />
            <Route path='/configuration' element={<Configuration />}>
              <Route path='theme' element={<Theme />} />
              <Route path='about' element={<About />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
