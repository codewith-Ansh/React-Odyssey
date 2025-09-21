import { color } from "framer-motion"
import Ansh from "./Ansh"

function App() {
  return (
    <>
      <Ansh />
      <h1>
        Heading 1
      </h1>
      <h2>
        Heading 2
      </h2>
      <h3>
        Heading 3
      </h3>
      <p>
        Returning multiple tags from a single function!
      </p>
    </>
    
    // <>...</> is called a Fragment. It allows us to return multiple elements from a function, since React components can only return one parent element. To handle multiple elements, we wrap them inside a Fragment.
  )
}

export default App
