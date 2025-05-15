import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar.jsx'
import { Main } from './components/Main.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}