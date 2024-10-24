import React from "react";

const TodoBody = ({ todos, setTasks }) => {

    // Need to finish this once the states have been set up
    const deleteTask = (selectedToDoId) => {
        console.log("Delete a task")

        //When the user clicks the X button , The task item gets removed from the array
        // the browser will then rerender with the remaning tasks.

        //Use let newArray = todos.filter(todo =>> write a conditional that returns true if the id is nnot the idthe user selected)
        let updatesTodos = todos.filter(todo => todo.id !== selectedToDoId)

        setTasks(updatesTodos)
        //set the array using the settter function
    }

    let renderTasks = todos.map(todo => {
        return (
            <li className="list-item" key={todo.id}>
                <label >{todo.title}</label>
                <button
                    onClick={() => deleteTask(todo.id)}>X</button>
            </li>
        );
    })

    return (
        <>
            <section className="todo-body">
                <ul className="todo-list">
                    {todos.length >= 1
                        ? renderTasks
                        :
                        "No tasks., Add a task"
                    }
                </ul>
            </section>
        </>
    );

}





export default TodoBody;

/*

 tasks.length >= 1
        ? tasks.map((task, index) => `Task ${index + 1}: ${task}`).join('\n')
        : "No tasks. Add a taskss";


              {renderTasks(todos)}
*/