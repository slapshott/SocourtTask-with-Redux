import { FETCH_ALL_GENRES, CREATE_GENRE, AJAX_ERROR } from './actionTypes';
import { getAllGenres, createGenre } from '../api/remote';

function fetchGenresSuccess(data){
    return {
        type: FETCH_ALL_GENRES,
        data
    }
}

function createGenreSuccess(data){
    return{
        type: CREATE_GENRE,
        data
    }
}

function fetchGenresAction(){
    return async (dispatch) => {
        try{
            const data = await getAllGenres()
            dispatch(fetchGenresSuccess(data))
        }catch(error){
            dispatch({
                type: AJAX_ERROR,
                error
            })
        }
    }
}

function createGenreAction(name, creationDate, lastUpdate){
    return async (dispatch) => {
        try{
            const data = await createGenre(name, creationDate, lastUpdate)
            dispatch(createGenreSuccess(data))
        }catch(error){
            dispatch({
                type: AJAX_ERROR,
                error
            })
        }
    }
}

export { fetchGenresAction, createGenreAction }