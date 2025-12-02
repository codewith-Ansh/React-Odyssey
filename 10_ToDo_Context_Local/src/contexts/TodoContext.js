import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => { console.warn('addTodo called without provider') },
    updateTodo: (id, todo) => { console.warn('updateTodo called without provider') },
    deleteTodo: (id) => { console.warn('deleteTodo called without provider') },
    toggleComplete: (id) => { console.warn('toggleComplete called without provider') }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
export default TodoContext