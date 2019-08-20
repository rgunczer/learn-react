import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

export function addTodoItem(name) {
    return {
        type: ADD_TODO_ITEM,
        payload: name
    };
}

export function removeTodoItem(name) {
    return {
        type: DELETE_TODO_ITEM,
        payload: name
    };
}

export function loadTodos() {

    return function (dispatch, state) {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)

                json.forEach(element => {
                    dispatch(addTodoItem(element.title))
                });

            });
    }

}
