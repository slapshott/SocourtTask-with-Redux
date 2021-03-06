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
    },
    createBook: (req,res) => {
        const reqBody = req.body
        console.log(reqBody)

        Book.create({
            name: reqBody.name,
            author: reqBody.author,
            genre: reqBody.genre,
            creationDate: reqBody.createDate,
            lastUpdate: reqBody.lastUpdate
        })
        .then(() => {
            res.status(200)
            res.send(reqBody)
        })
        .catch(err => console.log(err))   
    },
    deleteBook: (req,res) => {
        const id = req.params.id

        Book.findById(id)
            .then((book) => {
                Book.deleteOne(book)
                    .then((book) =>{
                        res.status(200)
                        res.json(book)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    editBook: (req,res) => {
        console.log(req.body)
        let id = req.body.id
        let book = req.body

        Book.findByIdAndUpdate(id,book)
            .then((book) => {
                console.log(book)
            })
            .catch(err => console.log(err))
    }
    
}

