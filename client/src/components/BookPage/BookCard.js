import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { deleteBookAction, fetchBooksAction } from '../../actions/bookAction'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


class BookCard extends Component {
    
    constructor(props){
        super(props)

        this.removeBook = this.removeBook.bind(this)
    }

    async removeBook(){
        let { id } = this.props
        this.props.deleteBook(id)
        this.props.history.push('/')
    }

    render(){
        console.log(this.props.books)
        let {name, author, genre, id} = this.props 
        return(
            <div className="container">
                <strong> 
                    <span>{name} by {author}</span><br/>
                    <Link to={'/api/book/' + id} className="button">View Details</Link>
                    <button className="button" onClick={this.removeBook}>Delete Book</button>
                </strong>
            </div>
        )
    } 
}

function mapStateToProps(state){
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteBook: (id) => dispatch(deleteBookAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookCard))
