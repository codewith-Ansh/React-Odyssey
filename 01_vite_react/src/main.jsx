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
