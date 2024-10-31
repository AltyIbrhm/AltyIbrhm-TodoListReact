import React from "react";
import { postData } from "../lib/action";


const TodoHeader = ({ todo, setTodo, task, setTasks, counter, setCounter }) => {

    //validate user input
    const validateInput = () => {
        if (todo === "") {
            alert("Please add a task")
        } else {
            addTask();
        }

    }

    //create the task object
    const addTask = () => {
        //display on the console the string wrtitten in the text box
        console.log(todo)
        //create a new object with id title and done keys
        let newTaskItem = {
            label: todo,
            is_done: false
        }
        postData(setTasks, newTaskItem);
        setTodo("")
    }

    return (
        <>
            <header className="todo-header">
                {/* inputs responsibilit is to update the todo variable */}
                <input type="text" placeholder="What needds to be done ?"
                    onChange={e => setTodo(e.target.value)}
                    value={todo}

                />
                <button
                    onClick={validateInput}
                >Add Task</button>
            </header>
        </>

    );
}


export default TodoHeader;