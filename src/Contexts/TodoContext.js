import {createContext, useContext} from 'react';

const todoContext = createContext({
    todo : [
        {
            id : 1,
            todoMsg : 'Todo message',
            completed : false
        }
    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (id, todo) => {},
    markTodo : (id) => {}
})

export const TodoProvider = todoContext.Provider;

export const useTodo = () => {
    return useContext(todoContext);
}