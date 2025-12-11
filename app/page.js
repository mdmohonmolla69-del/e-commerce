"use client"

import { useState } from 'react'
import './globals.css'
import Navbar from './components/Navbar'
import Manage from './components/Manage'

function App() {
  const [issideopen, setissideopen] = useState(false)
  const toggleSidebar = () => {
    setissideopen(!issideopen)
  }
  
  return (
    <>
      <Navbar onMenuClick={toggleSidebar} />
      <Manage issideopen={issideopen} />
    </>
  )
}

export default App