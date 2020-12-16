import React from "react"

const ToDo = () => {
const initialState = {
    item: "Learn About Reducers",
    completed:false,
    id: Date.now()
}


    return (
        <h1>Todo List</h1>
        <div>
            <h2>To Be Done</h2>
            <h3>{state.item}</h3>
        </div>

    )
}
export default ToDo;