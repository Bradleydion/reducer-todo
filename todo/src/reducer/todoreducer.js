import {ADD_TODO} from "./action/todoaction"
const toDoReducer = (state, action) => {
switch(action.type){
    case(ADD_TODO):
    return [...state, {item:action.payload}]

    default:
        return state;
}
}
export default toDoReducer;