let todos = [
    1,2,3
]
function todo(state=todos,action){
    switch (action.type) {
        case 'add_item':
            console.log(action)
            return [...state,action.value];
        default:
            return state;
    }
}
export default todo;