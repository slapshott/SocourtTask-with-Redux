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
        let {name, author, id} = this.props 
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

    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteBook: (id) => dispatch(deleteBookAction(id)),
        fetchBooks: () => dispatch(fetchBooksAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookCard))
