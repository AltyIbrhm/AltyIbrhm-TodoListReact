import React, { useState } from "react";

import TodoHeader from "./todoHeader";
import TodoBody from "./todoBody";
import TodoFooter from "./todoFooter";

import '../../styles/Todo.css'

const Todo = () => {

    const [todo, setTodo] = useState("")
    const [task, setTasks] = useState([])
    const [counter, setCounter] = useState(0)


    return (
        <>
            <div className="todo-app">
                {/* <h1>todos</h1> */}
                <TodoHeader
                    todo={todo}
                    setTodo={setTodo}
                    task={task}
                    setTasks={setTasks}
                    counter={counter}
                    setCounter={setCounter} />
                <TodoBody todos={task}
                    task={task}
                    setTasks={setTasks} />
                <TodoFooter todos={task} />

            </div>
        </>
    );
}

export default Todo;