import { useState } from 'react'
import './App.css'
import PageNo1 from './Componets/PageNo1'
import Header from './Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <PageNo1/>
    </>
  )
}

export default App
