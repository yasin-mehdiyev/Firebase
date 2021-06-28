import React, { useRef } from "react";
import classes from './AddMovie.module.css';

const AddMovie = (props) => {

    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');

    const submitHandler = (ev) => {
        ev.preventDefault();

        const movie = {
            titleRef: titleRef.current.value,
            openingTextRef: openingTextRef.current.value,
            releaseDateRef: releaseDateRef.current.value
        };

        props.submitMovie(movie);

        titleRef.current.value='';
        openingTextRef.current.value='';
        releaseDateRef.current.value='';
        
    }

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="opening-text">Opening Text</label>
          <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Release Date</label>
          <input type="text" id="date" ref={releaseDateRef} />
        </div>
        <button>Add Movie</button>
      </form>
    </React.Fragment>
  );
};

export default AddMovie;
