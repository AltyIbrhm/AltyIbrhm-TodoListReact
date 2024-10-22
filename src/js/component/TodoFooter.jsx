import React from "react";


const TodoFooter = ({ todos }) => {

    return (
        <>
            <footer className="footer">
                {
                    todos.length >= 0
                        ? `${todos.length} items left`
                        : `${todos.length} No Items Left`
                }
            </footer>
        </>);
}

export default TodoFooter