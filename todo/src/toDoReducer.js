
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
function newToDo(name){
    return{item:name, id:Date.now(), completed:false}
}

export const toDoReducer = (todos, action) => {
    switch(action.type){
        case(ACTIONS.ADD_TODO):
        return [...todos, newToDo(action.payload.item)]
        
        case(ACTIONS.COMPLETE_TASK):
        return todos.map(todo => {
            if (todo.id === action.payload.id){
                return {...todo, complete:!todo.complete}
            }
            return todo
        })
        case(ACTIONS.CLEAR_COMPLETED):
        return todos.filter(todo => !todo.complete)
        default:
            return todos;
    }
    }
    
    