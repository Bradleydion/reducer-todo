export const CLEAR_COMPLETED = "CLEAR_COMPLETED"
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TASK="COMPLETE_TASK";


export default {
   addTodo: (newTask) =>{
       return ({type:ADD_TODO, payload:newTask})
   }

    }

