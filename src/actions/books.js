import axios from 'axios';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';

export const fetchBooks = () => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_BOOKS
        })
        try {
            const res = await axios.get('https://api.nytimes.com/svc/books/v3/lists/overview?api-key=JeIs16fnxd3wCBFDqGrSKUDhEMS2OLVh');
            dispatch({
                type: FETCH_BOOKS_SUCCESS,
                payload: formatResults(res.data.results)
            });
        } catch (error) {
            dispatch({
                type: FETCH_BOOKS_ERROR,
                payload: error
            });
        }

    };

}

const formatResults = (results) => {
    const { lists, ...metadata } = results;
    return {
        metadata: metadata,
        lists: lists
    }
}