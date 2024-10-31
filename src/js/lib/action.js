
export const getData = async (setTasks) => {
    let url = 'https://playground.4geeks.com/todo/users/IbrahimAltay'
    const res = await fetch(url)

    if (res.ok) {
        const data = await res.json();
        setTasks(data.todos)
        // console.log("From getData() : ",data.todos)
    } else {
        // console.log('error : ', res.status, res.statusText)
        return { error: { status: res.status, statusText: res.statusText } }
    }
}

export const postData = (setTasks,newTaskItem) => {

    let options = {
        method: "POST",
        body: JSON.stringify(newTaskItem),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch('https://playground.4geeks.com/todo/todos/IbrahimAltay', options)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            getData(setTasks)
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log("Error: ", error))
}

export const deleteTask = (selectedToDoId, setTasks) =>{
    fetch(`https://playground.4geeks.com/todo/todos/${selectedToDoId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.status === 204) {
                // console.log('Task was deleted successfully.')
                getData(setTasks)
            }
            else {
                throw new Error("Error! The task was not deleted or found")
            }
        })
        .catch(error => console.log("Error : ", response.status, response.statusText))
}



