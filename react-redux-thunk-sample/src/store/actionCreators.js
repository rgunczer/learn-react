import { ADD_ITEM } from './actionTypes';

export function addTodo(text) {
    return {
        type: ADD_ITEM,
        payload: text
    }
}

export function loadTodos() {

    return function (dispatch, getState) {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                json.forEach(element => {
                    dispatch(addTodo(element.title));
                });
            })
    }
}
