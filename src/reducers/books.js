import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS } from '../actions/books';

const intialState = {
    books: [],
    fetching: false,
    fetched: false
};

export default (state = intialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                fetching: true,
                fetched: false
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                books: action.payload
            };
        case 'FETCH_BOOKS_ERROR':
            return {
                ...state,
                fetching: false,
                fetched: false,
                books: []
            };
        default:
            return {
                ...state
            };
    }
};

