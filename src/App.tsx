import { useState } from 'react'
import './App.css'
import { GenerateProfiles } from './pages/GenerateProfiles'
import { FavoriteProfiles } from './pages/FavoriteProfiles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<GenerateProfiles />} />
          <Route path="favorites" element={<FavoriteProfiles />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
