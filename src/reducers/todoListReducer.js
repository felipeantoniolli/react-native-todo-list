import { ADD_TODO } from '../actions';

const todoListReducer = (state = [], action) => {
    console.log("eu fui disparado");
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                text: action.text
            }

            return [...state, newTodo];
        default:
            return state;
    }
}

export default todoListReducer;