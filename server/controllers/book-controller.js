const Book = require('mongoose').model('Book');

module.exports = {
    getAllBooks: (req,res) => {
        Book.find()
            .then((books) =>{
                res.json(books)
            })
    },
    getBookById: (req,res) => {
        const id = req.params.id 
        Book.findById(id)
            .then((book) => {
                res.json(book)
            })
    },
    searchBookByName: (req, res) => {
        const name = req.query.name
        
        Book.find()
            .where({name: name})
            .then((book) => {
                res.json(book)
            })
    }
}

