import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Recent from './pages/recent/Recent'
import Explore from './pages/explore/Explore'
import Profile from './pages/profile/Profile'
import Configuration from './pages/configuration/Configuration'

import NavBar from './components/NavBar'

import './App.scss'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Recent />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/configuration' element={<Configuration />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
