import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const user = {
  name: 'Pablo Escobar',
  age: 56,
  goal: 'Learn ReactJS',
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="user-profile">
        <h1 id="title"> User Profile: </h1>
        <h5>Name: {user.name} </h5>
        <h5>Age: {user.age} </h5>
        <h5>Goal: {user.goal} </h5>
      </div>
    </>
  )
}

export default App
