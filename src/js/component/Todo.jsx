import React, { useState } from "react";

import TodoHeader from "./todoHeader";
import TodoBody from "./todoBody";
import TodoFooter from "./todoFooter";

import '../../styles/Todo.css'

const Todo = () => {

    // const [todo, setTodo] = useState("")
    // const [task, setTasks] = useState([])
    // const [counter, setCounter] = useState(0)

    const todoList = [
        { id: 1, title: 'Buy groceries', done: false },
        { id: 2, title: 'Clean the house', done: true },
        { id: 3, title: 'Finish homework', done: false },
        { id: 4, title: 'Pay electricity bill', done: true },
        { id: 5, title: 'Read a book', done: false }
    ];

    return (
        <>
            <div className="todo-app">
                {/* <h1>todos</h1> */}
                <TodoHeader />
                <TodoBody todos={todoList} />
                <TodoFooter todos={todoList} />

            </div>
        </>
    );
}

export default Todo;