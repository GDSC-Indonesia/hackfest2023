import { useState } from 'react'
import HackfestDetail from './components/HackfestDetail'

import HackTitle from './components/HackTitle'
import Navbar from './components/layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HackTitle/>
      <Navbar/>
      <HackfestDetail/>
      <HackTitle/>
      <HackTitle/>
      <HackTitle/>
      <HackTitle/>
      <HackTitle/>
      <HackTitle/>
      <HackTitle/>
      <HackTitle/>
      <HackTitle/>
      <HackTitle/>

    </>
  )
}

export default App
