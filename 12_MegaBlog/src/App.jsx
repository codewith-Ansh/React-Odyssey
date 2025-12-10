import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth'
import './App.css'

function App() {
  const [ loading, setLoading] = useState(true);
  const [ posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [])

  return (
    <>
      <h1 className="text-3xl font-semibold underline text-center hover:text-blue-600 cursor-pointer mt-76"></h1>
    </>
  )
}

export default App
