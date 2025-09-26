import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { h1 } from 'framer-motion/client'
import { anticipate } from 'framer-motion'

// function MyApp(){
//     return (
//         <>
//             <h1>
//                 Function inside main.jsx !
//             </h1>
//         </>
//     )
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


// --- for the two codes ---
// React.createElement(...) works directly in JavaScript, while JSX (<App />) or calling a component (MyApp()) needs compilation/React handling — only React.createElement gives React a valid element without extra setup.
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    "Click me to visit google"
)

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit Google</a>
// )

createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp()
    reactElement
    // anotherElement
    // <App />
)
