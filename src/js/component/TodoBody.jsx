import React from "react";

function renderTasks(tasks) {
    return tasks.length > 1
        ? tasks.map((task, index) => `Task ${index + 1}: ${task}`).join('\n')
        : "No tasks. Add a taskss";
}


const TodoBody = (todos) => {
    return (
        <>
            <section className="todo-body">
                <ul className="todo-list">
                    {renderTasks(todos)}
                </ul>
            </section>
        </>
    );
}

export default TodoBody;