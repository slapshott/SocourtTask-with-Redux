import React, { Component } from 'react';
import { getBookDetails } from '../../api/remote'


export default class DetailsBook extends Component {

    constructor(props){
        super(props)

        this.state = {
            book:{}
        }
    }

    componentDidMount(){
        this.getBook()
    }

    async getBook(){
        let id = this.props.match.params.id
        const book = await getBookDetails(id)
        this.setState({book: book})
    }

    render(){
        return(
            <div className="container">
                <p>    
                Book name:
                    <span className="details">  
                        {this.state.book.name}
                    </span><br/>
                Author:
                    <span className="details">
                        {this.state.book.author}
                    </span><br/>
                Genre:
                    <span className="details">  
                        {this.state.book.genre}
                    </span><br/>
                Date of creation:
                    <span className="details">
                        {this.state.book.creationDate}
                    </span><br/>
                last updated:
                    <span className="details">
                        {this.state.book.lastUpdate}
                    </span><br/>
                </p>
            </div>
        )
    }
} 
