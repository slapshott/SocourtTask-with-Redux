import React, { Component } from 'react';
import { fetchBooksByGenre } from '../../actions/bookAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class BooksByGenre extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            genre: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
        this.props.fetchBooks(this.state.genre)
    }


    render(){
        let books = this.props.books
       
        return(
            <div className="container"> 
                <form onSubmit={this.onSubmit}>
                <input
                    name="genre"
                    onChange={this.onChange}
                    value={this.state.genre}
                />
                <input type="submit" value="Search" />
                </form>
                {books && books.map(b => {
                    return <p key={b._id}>
                                <span >{b.name} by {b.author}</span><br/>
                                <Link to={'/api/book/' + b._id}>View Details</Link>
                            </p>
                })}
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        books: state.books.booksByGenre
    }
}

function mapDispatchToProsp (dispatch){
    return {
        fetchBooks: (genre) => dispatch(fetchBooksByGenre(genre))
    }
}

export default connect(mapStateToProps, mapDispatchToProsp)(BooksByGenre)