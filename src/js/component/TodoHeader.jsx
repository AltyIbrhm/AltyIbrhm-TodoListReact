import React from "react";


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
        let newTask = {
            id: counter,
            title: todo,
            done: false
        }
        console.log(newTask)
        // use settTasks to create an new array
        setTasks([...task, newTask]);



        //increment the counter by 1
        setCounter(counter + 1);
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