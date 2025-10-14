import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <Card name="Ansh Darji" views="2.5k"/>
      <Card name="Jay parmar" views="1.3k" btnText="Visit"/>
    </>
  )
}

export default App
