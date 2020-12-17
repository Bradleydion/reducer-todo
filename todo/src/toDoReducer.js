import {ADD_TODO, CLEAR_COMPLETED} from "./toDoAction"
const toDoReducer = (state, action) => {
    switch(action.type){
        case(ADD_TODO):
        return [...state, {item:action.payload}]
        case(CLEAR_COMPLETED):
        return [...state,!state.completed]
        default:
            return state;
    }
    }
    export default toDoReducer;