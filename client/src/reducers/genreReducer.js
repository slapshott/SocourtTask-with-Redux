import { FETCH_ALL_GENRES } from '../actions/actionTypes'

export default function GenreReducer (state = [], action) {
    switch (action.type) {
        case FETCH_ALL_GENRES:
            return {
                genres: action.data
            }
        default:
            return state
    }
}