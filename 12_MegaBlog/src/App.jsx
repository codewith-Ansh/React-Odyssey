import { useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState("Hello from Mega blog")
  const changeContent = () => {
    console.log(import.meta.env.VITE_APPWRITE_URL);
    setContent("You clicked the heading!");
  }

  return (
    <>
      <h1 class="text-3xl font-semibold underline text-center hover:text-blue-600 cursor-pointer mt-76" onClick={changeContent}>{content}</h1>
    </>
  )
}

export default App
