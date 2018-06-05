import { registerReducer, loginReducer } from './authReducer'
import books from './bookReducer'
import genres from './genreReducer'

export default {
    register: registerReducer,
    login: loginReducer, 
    books,
    genres,
   
}