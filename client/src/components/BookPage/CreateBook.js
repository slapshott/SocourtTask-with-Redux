import React, { Component } from 'react';
import { createBook } from '../../api/remote'

export default class CreateBook extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            author: '',
            genre: '',
            creationDate: '',
            lastUpdate: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmit(e){
        e.preventDefault();
        let name = this.state.name;
        let author = this.state.author;
        let genre = this.state.genre;
        let creationDate = this.state.creationDate;
        let lastUpdate = this.state.lastUpdate

        const res = await createBook(name,author,genre,creationDate,lastUpdate)
        console.log(res)
        
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                            label="Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="author">Author</label>
                        <input
                            name="author"
                            onChange={this.onChange}
                            value={this.state.author}
                            label="Author"
                        />
                    </div>

                    <div>
                        <label htmlFor="genre">Genre</label>
                        <input
                            name="genre"
                            onChange={this.onChange}
                            value={this.state.genre}
                            label="Genre"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="creationDate">Creation Date</label>
                        <input
                            name="creationDate"
                            onChange={this.onChange}
                            value={this.state.creationDate}
                            label="CreationDate"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastUpdate">Last update</label>
                        <input
                            name="lastUpdate"
                            onChange={this.onChange}
                            value={this.state.lastUpdate}
                            label="LastUpdate"
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Create" />
                </form>
            </div>
            
        )
    }
}