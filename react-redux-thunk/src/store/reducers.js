import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

export function todoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return [...state, action.payload];

        case DELETE_TODO_ITEM:
            return state;

        default:
            return state;
    }
}
