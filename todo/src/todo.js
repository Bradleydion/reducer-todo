import React from 'react';
import {ACTIONS} from "./toDoReducer"

export default function Todo ({todo, dispatch}){
    return(
        <div className="todo-items">
            <span onClick={()=> dispatch({type: ACTIONS.COMPLETE_TASK, payload: {id: todo.id}})} style= {{textDecoration: todo.complete ? 'line-through': 'none'}}>{todo.item}</span>
        </div>
    )
}