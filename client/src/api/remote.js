const host = 'http://localhost:5000/';

async function register(name, password) {
    try{
        const res = await fetch(host + 'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password
            })
        });
        return res
    }catch(e){
        return e
    }   
}

async function login(name, password) {
    try{
        const res = await fetch(host + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password
            })
        });
        return res
    }catch (e){
        return e
    }    
}

async function getAllBooks(){
    try{
        const res = await fetch(host + 'api/books')
        return await res.json()
    }catch(e){
        console.log(e)
    }
}

async function getAllGenres(){
    try{
        const res = await fetch(host + 'api/genres')
        return await res.json()
    }catch(e){
        console.log(e)
    }
}

async function getBookDetails(id){
    try{
        const res = await fetch(host + 'api/book/' + id)
        return await res.json()
    }catch(e){
        console.log(e)
    }   
}

async function getBookByGenreId(id){
    try{
        const res = await fetch(host + 'api/genre/' + id)
        return await res.json()
    }catch(e){
        console.log(e)
    }
}

async function searchBookByName(name){
    try{
        const res = await fetch(host + 'api/books/search?name=' + name)
        return await res.json()
    }catch(e){
        console.log(e)
    }
}

async function searchBooksByGenre(genre){
    try{
        const res = await fetch(host + 'api/genres/search?genre=' + genre)
        return await res.json()
    }catch(e){
        console.log(e)
    }
}

async function createBook(name, author, genre, createDate, lastUpdate){
    try{
        const res = await fetch(host + 'api/book/create' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                author,
                genre,
                createDate,
                lastUpdate
            })
        })
        return await res.json()
    }catch(e){
        return e
    }
}

async function createGenre(name, creationDate, lastUpdate){
    try{
        const res = fetch(host + 'api/genre/create' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                creationDate,
                lastUpdate
            })
        })
        return await res.json()
    }catch(error){
        return error
    }
}

export { 
    register, 
    login, 
    getAllBooks, 
    getAllGenres, 
    getBookDetails, 
    getBookByGenreId, 
    searchBookByName,
    searchBooksByGenre,
    createBook,
    createGenre
};