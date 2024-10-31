import React, { useState, useEffect } from "react";

import TodoHeader from "./todoHeader";
import TodoBody from "./todoBody";
import TodoFooter from "./todoFooter";
import '../../styles/Todo.css'
import { getData } from "../lib/action";

const Todo = () => {

    const [todo, setTodo] = useState("")
    const [task, setTasks] = useState([])
    const [counter, setCounter] = useState(0)

    //Creating a useEffect hook that renders only on the first render
    //the [] are called the dependency array  which are needed to
    //render only one time 
    useEffect(() => {
        // use our fetch to retrieve our todo list in the playground!
        getData(setTasks);

    }, []);


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