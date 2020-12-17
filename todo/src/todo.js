import React, {useState, useReducer} from "react"
import todoReducer from "./toDoReducer"

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
    <h3>This is where the list of task will eventually go</h3>
            <div><input 
                value = {newTask}
                onChange ={handleChanges}
                type ="text"
                name ="task"
                />
                <button type="add-Task">Add Task</button></div>
        </div>
        

    )
}
export default ToDo;