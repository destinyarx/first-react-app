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
        <h1 id="user-title"> User Profile: </h1>

        <div class="user-data">
          <h5> <span class="text-label"> Name: </span> {user.name} </h5>
          <h5> <span class="text-label"> Age: </span> {user.age} </h5>
          <h5> <span class="text-label"> Goal: </span> {user.goal} </h5>
        </div>
      </div>
    </>
  )
}

export default App
