import { FETCH_ALL_GENRES, AJAX_ERROR } from './actionTypes';
import { getAllGenres } from '../api/remote';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

function fetchGenresSuccess(data){
    return {
        type: FETCH_ALL_GENRES,
        data
    }
}

export function fetchGenresAction(){
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