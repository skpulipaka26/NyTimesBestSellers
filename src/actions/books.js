import axios from 'axios';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';

export const fetchBooks = () => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_BOOKS
        })
        const res = await axios.get('http://api.nytimes.com/svc/books/v3/lists/overview?api-key=JeIs16fnxd3wCBFDqGrSKUDhEMS2OLVh');
        dispatch({
            type: FETCH_BOOKS_SUCCESS,
            payload: res.data.results.lists
        });

    };

}

export const fetchBooksSuccess = (books) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    }
}