import React from 'react';
import {ACTIONS} from "./toDoReducer"

export default function Todo ({todo, dispatch}){
    console.log(todo)
    return(
        <div className="todo-items">
            <span onClick={()=> dispatch({type: ACTIONS.COMPLETE_TASK, payload:{id: todo.id}})} style= {{textDecoration: todo.completed ? 'line-through': 'none'}}>{todo.item}</span>
            
        </div>
    )
}