import React from 'react'
import classes from './MovieList.module.css';
import Movie from './Movie';

const MovieList = (props) => {

    const list = props?.movies || [];

    console.log("props.movies",props.movies);

    return (
        <React.Fragment>

            <ul className={classes['movies-list']}>
               {
                    list.map((movie)=>(
                            <Movie 
                                title={movie.titleRef}
                                openingText={movie.openingTextRef}
                                releaseDate={movie.releaseDateRef}
                            />
                    ))
               }
            </ul>
            
        </React.Fragment>
    )
}

export default MovieList
