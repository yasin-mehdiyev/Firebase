import React from 'react'
import classes from './Movie.module.css';

const Movie = (props) => {
    return (
        <React.Fragment>

            <li className={classes.movie}>
                <h2>{props.title}</h2>
                <h3>{props.openingText}</h3>
                <p>{props.releaseDate}</p>
            </li>

        </React.Fragment>
    )
}

export default Movie
