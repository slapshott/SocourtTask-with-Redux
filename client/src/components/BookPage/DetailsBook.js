import React, { Component } from 'react';
import { fetchBookDetails } from '../../actions/bookAction'
import { connect } from 'react-redux'


class DetailsBook extends Component {

    constructor(props){
        super(props)
    }

    componentWillMount(){
        let id = this.props.match.params.id
        this.props.fetchBook(id)
    }
    

    render(){
        let book = this.props.book
        return(
            <div className="container">
                <p>    
                Book name:
                    <span className="details">  
                        {book && book.name}
                    </span><br/>
                Author:
                    <span className="details">
                        {book && book.author}
                    </span><br/>
                Genre:
                    <span className="details">  
                        {book && book.genre}
                    </span><br/>
                Date of creation:
                    <span className="details">
                        {book && book.creationDate}
                    </span><br/>
                last updated:
                    <span className="details">
                        {book && book.lastUpdate}
                    </span><br/>
                </p>
            </div>
        )
    }
} 

function mapStateToProps(state){
    return{
        book: state.books.book
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchBook: (id) => dispatch(fetchBookDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsBook)