import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(5)



  const addValue = ()=>{
    // counter = counter+1
    if(counter>=20){
      alert('Counter value can not be greater than 20')
      return
    }
    setCounter(counter+1)
    console.log('Counter Value:',counter)

  }

  const removeValue = ()=>{
    // counter = counter+1
    if(counter-1<0){
      alert('Counter value can not be less than 0')
      return
    }
    setCounter(counter-1)
    console.log('Counter Value:',counter)

  }
  

  return (
   <>
   <h1>Chai aur react</h1>
   <h2>Counter Value: {counter}</h2>

   <button onClick={addValue}>Add value</button>
   <br />
   <button onClick={removeValue}>remove value</button>
   </>
  )
}

export default App
