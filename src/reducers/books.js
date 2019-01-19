import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS } from '../actions/books';

const intialState = {
    bestSellers: {
        metadata: {},
        lists: []
    },
    fetching: false,
    error: null
};

export default (state = intialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: null,
                bestSellers: action.payload
            };
        case 'FETCH_BOOKS_ERROR':
            return {
                ...state,
                fetching: false,
                error: action.payload,
                bestSellers: {}
            };
        default:
            return {
                ...state
            };
    }
};

