import { FETCH_ALL_BOOKS, FETCH_BOOK_DETAILS, FETCH_BOOK_BY_NAME, FETCH_BOOK_BY_GENRE, FETCH_BOOK_BY_GENRE_ID ,AJAX_ERROR } from './actionTypes'
import { getAllBooks, getBookDetails, searchBookByName, searchBooksByGenre, getBookByGenreId } from '../api/remote'

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

export function fetchBooksAction(){
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

export function fetchBookByName(name){
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

export function fetchBooksByGenre(genre){
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

export function fetchBooksByGenreId(id){
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