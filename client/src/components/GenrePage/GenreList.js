import React, { Component } from 'react';
import { fetchGenresAction } from '../../actions/genreAction'
import { connect } from 'react-redux'
import GenreCard from './GenreCard'

class GenreList extends Component {

    componentWillMount(){
        this.props.fetchGenres()
    }


    render(){
        let genres = this.props.genres
        return(
            <div>
                <p>Genres: </p>
                {genres && genres.map((g,i) => {
                    return <GenreCard
                            name={g.name}
                            creationDate={g.creationDate}
                            lastUpdate={g.lastUpdate}
                            key={i}
                        />
                    // return  <p key={i}>{g}</p>
                    
                })}
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        genres: state.genres.genres
    }
}

function mapDispatchToProps (dispatch){
    return {
        fetchGenres: () => dispatch(fetchGenresAction())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(GenreList)