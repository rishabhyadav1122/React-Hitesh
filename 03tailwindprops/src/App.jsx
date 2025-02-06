import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj ={
    username:"Rishabh",
    age:21
  }

  let newArr = [1,2,3]

  return (
    <>
    <h1>Tailwind Props</h1>
    <Card username="chaiaurcode" />
    <Card username="rishabh"/>
    </>
  )
  
}

export default App
