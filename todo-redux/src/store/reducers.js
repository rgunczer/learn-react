import { combineReducers } from 'redux';
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from './actionTypes';

function todoReducer(state = [], action) {
    console.log('reducer: ', action);

    switch (action.type) {
        case ADD_TODO_ITEM:
            return [...state, action.payload]

        case REMOVE_TODO_ITEM:
            return state.filter(x => x !== action.payload);

        default:
            return state;
    }
}

export default combineReducers({
    todos: todoReducer
});