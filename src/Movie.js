import React, { Component } from 'react';
import PropTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

class Movie extends Component{

static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

    render(){
        return(
            <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster poster={this.props.poster} alt={this.props.title} />    
                </div>
                <div className="Moive__Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
                    </div>
                    <p className="Movie__Synopsis">
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />   
                    </p>
                </div>
            </div>
            
        )
    }
}

class MoviePoster extends Component{
    
    static propTypes = {
        poster: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt={this.props.alt} title={this.props.alt} className="Movie__Poster"/>
        )
    }
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie