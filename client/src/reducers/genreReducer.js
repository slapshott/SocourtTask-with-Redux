import { FETCH_ALL_GENRES, CREATE_GENRE } from '../actions/actionTypes'

export default function GenreReducer (state = [], action) {
    switch (action.type) {
        case FETCH_ALL_GENRES:
            return {
                genres: action.data
            }
        case CREATE_GENRE:
            return {
                createGenre: action.data
            }
        default:
            return state
    }
}