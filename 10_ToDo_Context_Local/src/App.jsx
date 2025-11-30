import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}   className='text-3xl font-bold underline'>
          count is {count}
        </button>

        <h2  className='text-3xl font-bold underline'>Hello world</h2>
      </div>
    </>
  )
}

export default App
