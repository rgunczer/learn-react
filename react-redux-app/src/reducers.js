export default function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];

        case 'DEL':
            return state.filter(x => x !== action.payload);

        default:
            return state;
    }
}
