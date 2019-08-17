import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from './actionTypes';

export function addTodo(name) {
    return {
        type: ADD_TODO_ITEM,
        payload: name
    };
}

export function removeTodo(name) {
    return {
        type: REMOVE_TODO_ITEM,
        payload: name
    };
}