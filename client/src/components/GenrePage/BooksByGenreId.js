import React, { Component } from 'react';
import { fetchBooksByGenreId } from '../../actions/bookAction'
import { connect } from 'react-redux';


class BooksByGenreId extends Component {

    componentDidMount(){
        const genre = this.props.match.params.id
        this.props.fetchBooks(genre)
    }


    render(){
        let genre = this.props.match.params.id
        let books = this.props.books
        
        return(
            <div className="container">
                <p> {genre} books: </p>
                <ul>
                    {books && books.map(b => {
                        return  <li key={b._id}> {b.name} by {b.author} </li>
                    })}
                </ul>
            </div>
        )
    }
} 

function mapStateToProps(state){
    return {
        books: state.books.booksByGenreId
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchBooks: (genre) => dispatch(fetchBooksByGenreId(genre))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksByGenreId)