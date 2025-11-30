import { create } from "framer-motion/client";
import { createContext, useContext } from "react";
import React from 'react'

export default TodoContext = createContext({

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider