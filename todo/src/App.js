import React, {useReducer, useState} from "react"
import Todo from "./todo"
import {toDoReducer, incompleteTask, ACTIONS} from "./toDoReducer"

function App() {
 
const [todos, dispatch] = useReducer(toDoReducer, incompleteTask)
const [name, setName] = useState('')
function handleSubmit (e){
       e.preventDefault()
       dispatch({type:ACTIONS.ADD_TODO, payload:{item:name}})
      //  setName('')
   }
   function handleChange (e){
      setName(e.target.value)
   }
   


    return (
        <div className= "todo-list">
        <h1>Todo List</h1>
    <div></div>
            <div><form onSubmit={handleSubmit}><input 
                value = {name}
                onChange={handleChange}
                type ="text"
                name ="todo"
                />
                <button type="add-Task">Add Task</button></form></div>
                <h2>To Be Done</h2>
               {todos.map(todo => {
                 return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
               })}<br></br>
                <div><button type="clear-completed" onClick={()=>dispatch({type:ACTIONS.CLEAR_COMPLETED})}>Clear Completed</button></div>
        </div>
        

    )
}

export default App;
