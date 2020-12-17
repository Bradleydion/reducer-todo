
export const ACTIONS={
    ADD_TODO: 'add-todo',
    COMPLETE_TASK:'complete-task',
    CLEAR_COMPLETED:"clear-completed"

}
export const incompleteTask = [
    {
    item: "Learn About Reducers",
    completed:false,
    id: Date.now()
    }
]
function newToDo(todo){
    return{item:todo, id:Date.now(), completed:false}
}

export const toDoReducer = (todo, action) => {
    switch(action.type){
        case(ACTIONS.ADD_TODO):
        return [...todo, newToDo(action.payload.item)]
        
        case(ACTIONS.COMPLETE_TASK):
        return todo.map(todo => {
            if (todo.id === action.payload.id){
                return {...todo, complete:!todo.complete}
            }
            return todo
        })
        case(ACTIONS.CLEAR_COMPLETED):
        return todo.filter(todo => !todo.complete)
        default:
            return todo;
    }
    }
    
    