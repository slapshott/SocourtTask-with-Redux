import { 
    FETCH_ALL_BOOKS, 
    FETCH_BOOK_DETAILS, 
    FETCH_BOOK_BY_NAME, 
    FETCH_BOOK_BY_GENRE, 
    FETCH_BOOK_BY_GENRE_ID, 
    CREATE_BOOK,
    DELETE_BOOK,
    AJAX_ERROR
 } from './actionTypes'
import { 
    getAllBooks, 
    getBookDetails, 
    searchBookByName, 
    searchBooksByGenre, 
    getBookByGenreId ,
    createBook,
    deleteBook
} from '../api/remote'

function fetchBooksSucces(data){
    return {
        type: FETCH_ALL_BOOKS,
        data
    }
}

function fetchByNameSuccess(data){
    return {
        type: FETCH_BOOK_BY_NAME,
        data
    }
}

function fetchByGenreSuccess(data){
    return {
        type: FETCH_BOOK_BY_GENRE,
        data
    }
}

function fetchByGenreIdSuccess(data){
    return {
        type: FETCH_BOOK_BY_GENRE_ID,
        data
    }
}

function fetchDetailsSuccess(data){
    return {
        type: FETCH_BOOK_DETAILS,
        data
    }
}

function createBookSuccess(data){
    return{
        type: CREATE_BOOK,
        data
    }
}

function deleteBookSuccess(data){
    return{
        type: DELETE_BOOK,
        data
    }
}

function fetchBooksAction(){
    return async (dispatch) => {
        try{
            const data = await getAllBooks();
            dispatch(fetchBooksSucces(data))
        }catch(error){
            dispatch({
                type: AJAX_ERROR,
                error   
            })
        }
    }
}

function fetchBookByName(name){
    return async (dispatch) => {
        try{
            const data = await searchBookByName(name)
            dispatch(fetchByNameSuccess(data))
        }catch(error){
            dispatch({
                type: AJAX_ERROR,
                error
            })
        }
    }
}

function fetchBooksByGenre(genre){
    return async (dispatch) => {
        try{
            const data = await searchBooksByGenre(genre)
            dispatch(fetchByGenreSuccess(data))
        }catch(error){
            dispatch({
                type: AJAX_ERROR,
                error
            })
        }
    }
}

function fetchBooksByGenreId(id){
    return async (dispatch) => {
        try{
            const data = await getBookByGenreId(id)
            dispatch(fetchByGenreIdSuccess(data))
        }catch(error){
            dispatch({
                type: AJAX_ERROR,
                error
            })
        }
    }
}

function fetchBookDetails(id){
    return async (dispatch) => {
        try{
            const data = await getBookDetails(id)
            dispatch(fetchDetailsSuccess(data))
        }catch(error){
            dispatch({
                type: AJAX_ERROR,
                error
            })
        }
    }
}

function createBookAction(name, author, genre, creationDate, lastUpdate){
    return async (dispatch) => {
        try{
            const data = await createBook(name, author, genre, creationDate, lastUpdate)
            dispatch(createBookSuccess(data))
        }catch(error){
            dispatch({
                type: AJAX_ERROR,
                error
            })
        }
    }
}

function deleteBookAction(id){
    return async (dispatch) => {
        try{
            const data = await deleteBook(id)
            dispatch(deleteBookSuccess(data))
        }catch(error){
            return error
        }
    }
}

export { 
    fetchBooksAction,
    fetchBookByName, 
    fetchBooksByGenre, 
    fetchBooksByGenreId, 
    fetchBookDetails,
    createBookAction,
    deleteBookAction
}