const controllers = require('../controllers');
const restrictedPages = require('./auth');
const auth = require('./auth');

module.exports = app => {

    // Home
    app.get('/', controllers.home.index)

    // Authentication
    app.post('/register', controllers.user.registerPost);
    app.post('/login', controllers.user.loginPost);
    app.get('/logout', controllers.user.logout);
    
    // Book
    app.get('/api/books/search', controllers.book.searchBookByName)
    app.get('/api/books', controllers.book.getAllBooks)
    app.get('/api/book/:id', controllers.book.getBookById)
    app.post('/api/book/create', controllers.book.createBook)
    app.delete('/api/delete/book/:id', controllers.book.deleteBook)
    app.put('/api/edit/book/:id', controllers.book.editBook)
    
    // Genres
    app.get('/api/genres/search', controllers.genre.searchBookByGenre)
    app.get('/api/genres', controllers.genre.getAllGenres)
    app.get('/api/genre/:id', controllers.genre.getBookByGenre)
    app.post('/api/genre/create', controllers.genre.createGenre)


    // Error
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};