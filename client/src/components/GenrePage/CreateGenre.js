import React, { Component } from 'react';
import { createGenreAction } from '../../actions/genreAction';
import { connect } from 'react-redux';
import toastr from 'toastr';

class CreateGenre extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            creationDate: '',
            lastUpdate: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault()
        let name = this.state.name;
        let creationDate = this.state.creationDate;
        let lastUpdate = this.state.lastUpdate;
        this.props.createGenre(name, creationDate, lastUpdate)
        this.setState({ 
            name: '',
            creationDate: '',
            lastUpdate: ''
        })
        toastr.success('Genre added successfully!')
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

function mapStateToProps(state){
    return{

    }
}

function mapDispatchToProps(dispatch){
    return{
        createGenre: (name, creationDate, lastUpdate) => dispatch(createGenreAction(name,creationDate,lastUpdate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGenre)