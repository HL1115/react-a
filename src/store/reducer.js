import {combineReducers} from 'redux';
let todos = [
    1,2,3
]
function todo(state=todos,action){
    switch (action.type) {
        case 'add_item':
            return [...state,action.value];
        default:
            return state;
    }
}

let inputValue = 'hello';
function inputchange(state=inputValue,action){
    switch (action.type) {
        case 'change_value':
            console.log(action)
            return action.value;
    
        default:
            return state;
    }
}
export default combineReducers({
    todo,inputchange
});