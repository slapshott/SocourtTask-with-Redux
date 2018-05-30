import React, { Component } from 'react'
import { getAllBooks } from '../../api/remote'
import BookCard from './BookCard'
import { fetchBooksAction } from '../../actions/bookAction'
import { connect } from 'react-redux';

class BookList extends Component {   

    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.fetchBooks()
    }

    render(){
        let books = this.props.books.books
        return(
            <div>
                <p>Books:</p>
                {books && books.map((b,i) => {
                    return <BookCard
                            name={b.name}
                            author={b.author}
                            genre={b.genre}
                            creationDate={b.creationDate}
                            lastUpdate={b.lastUpdate}
                            id={b._id}
                            key={i}
                        />
                })}
            </div> 
        )

    }
} 

function mapStateToProps(state){
    return{
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchBooks: () => dispatch(fetchBooksAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)