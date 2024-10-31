import React from "react";
import { deleteTask } from "../lib/action";

const TodoBody = ({ todos, setTasks }) => {

    // Need to finish this once the states have been set up

    let renderTasks = todos.map(todo => {
        return (
            <li className="list-item" key={todo.id}>
                <label >{todo.label}</label>
                <button
                    onClick={() => deleteTask(todo.id, setTasks)}>X</button>
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
