const Genre = require('../models/Genre');
const Book = require('../models/Book');

module.exports = {
    getAllGenres: (req,res) => {
        Genre.find()
            .then((genres) => {
                res.json(genres)
            })
        // Book.find({})
        //     .then((books) => {
        //         let genres = [];
        //         books.map((b) => {
        //             genres.push(b.genre)
        //         })
        //         uniqueSet = new Set(genres)
        //         genres = Array.from(uniqueSet)
        //         console.log(genres)
        //         res.json(genres)
        //     })
    },
    getBookByGenre: (req,res) => {
        let genre = req.params.id;
            
        Book.find()
            .where({genre: genre})
            .then((books) => {
                res.json(books)
            })
    },
    searchBookByGenre: (req, res) => {
        const genre = req.query.genre

        Book.find()
            .where({genre: genre})
            .then((books) => {
                res.json(books)
            })
    }
    
}