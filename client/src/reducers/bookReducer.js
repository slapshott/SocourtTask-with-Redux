import { 
    FETCH_ALL_BOOKS, 
    FETCH_BOOK_DETAILS, 
    FETCH_BOOK_BY_NAME, 
    FETCH_BOOK_BY_GENRE, 
    FETCH_BOOK_BY_GENRE_ID, 
    CREATE_BOOK,
    DELETE_BOOK
} from '../actions/actionTypes'

export default function BookReducer (state = [], action) {
    switch (action.type) {
        case FETCH_ALL_BOOKS: 
            return {
                books: action.data
            }
        case FETCH_BOOK_DETAILS:
            return {
                book: action.data
            }
        case FETCH_BOOK_BY_NAME:
            return {
                bookByName: action.data
            }
        case FETCH_BOOK_BY_GENRE:
            return{
                booksByGenre: action.data
            }
        case FETCH_BOOK_BY_GENRE_ID:    
            return{
                booksByGenreId: action.data
            }
        case CREATE_BOOK: 
            return{
                createBook: action.data
            }
        case DELETE_BOOK:
            return{
                deleteBook: action.data
            }
        default:
            return state
    }
}
