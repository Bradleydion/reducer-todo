import React, {useState, useReducer} from "react"
import todoReducer from "./reducer/todoreducer"

const ToDo = () => {
    const [newTask, setNewTask]=useState("")
    const incompleteTask = [
        {
        item: "Learn About Reducers",
        completed:false,
        id: Date.now()
        }
    ]
    const [state, dispatch] = useReducer(todoReducer, incompleteTask)
    const handleChanges = (e) =>{
        setNewTask({item:e.target.value, completed:false, id:Date.now()})
    }


    return (
        <div className= "todo-list">
        <h1>Todo List</h1>
        
            <h2>To Be Done</h2>
            <h3>{state.item}</h3>
            <input 
                value = {newTask}
                onChange ={handleChanges}
                type ="text"
                name ="task"
                />
        </div>
        

    )
}
export default ToDo;