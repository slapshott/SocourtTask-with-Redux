import React, { Component } from 'react';
import { fetchBookByName } from '../../actions/bookAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BookByName extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
        this.props.fetchBook(this.state.name)
    }


    render(){
        
        let book = this.props.book
        if(book){
            book = this.props.book[0]
        }
        return(
            <div className="container"> 
                <form onSubmit={this.onSubmit}>
                <input
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                />
                <input type="submit" value="Search" />
                </form>
                {book && <p>
                            <span>{book.name} by {book.author}</span><br/>
                            {book && <Link to={'/api/book/' + book._id}>View Details</Link>}
                        </p>}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        book: state.books.bookByName
    }
}

function mapDispatchToProps (dispatch){
    return {
        fetchBook: (name) => dispatch(fetchBookByName(name))  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookByName)