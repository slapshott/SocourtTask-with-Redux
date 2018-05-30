import React, { Component } from 'react';

export default class SearchGenre extends Component {

    constructor(props){
        super(props)

        this.state = {
            book:{},
            search: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
    }


    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input 
                    onChange={this.onChange}
                    name='search'
                    value={this.state.search}
                    className= "searchField"
                /> 
                </form>
                <p></p>
            </div>
        )
    }
    
    
}