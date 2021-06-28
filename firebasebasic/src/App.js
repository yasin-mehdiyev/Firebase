import React, { useCallback, useEffect, useState } from 'react'
import './App.css';
import MovieList from './components/MovieList';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import AddMovie from './components/AddMovie';

const App = () => {

  const [dummyMovie, setDummyMovies] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState('');

  const fetchHandlerMovies = useCallback(async () => {
    try {
        setloading(true);
        const response = await axios.get('https://movies-project-9c3cb-default-rtdb.firebaseio.com/movies.json');
        const data = response.data;

        let loadDatas = [];

        for(let key in data){
          loadDatas.push({
            openingTextRef:data[key].openingTextRef,
            releaseDateRef:data[key].releaseDateRef,
            titleRef:data[key].titleRef
          })
        }

        console.log(loadDatas);
        setDummyMovies(loadDatas);
    } catch (error) {
       seterror(error.message);
    }
    finally{
      setloading(false);
    }
  },[]);

  let content = 'No found item';

  if(error){
    content = <p>{error}</p>
  }

  if(loading){
    content = <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={1000}
              />
  }

  if(dummyMovie.length){
    content = <MovieList movies = {dummyMovie} />
  }

  const submitMovie = async (movie) => {
    if(movie.titleRef!=='' || movie.openingTextRef!=='' || movie.releaseDateRef!==''){
        const response = await axios('https://movies-project-9c3cb-default-rtdb.firebaseio.com/movies.json',
        {
          method: 'POST',
          data: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.data;
        console.log(data);

    }
    else{
      console.log('empty');
    }
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie submitMovie={submitMovie} />
      </section>
      <section>
          <button onClick={fetchHandlerMovies}>Fetch Movies</button>
      </section>
      <section>
        {
          content
        }
      </section>
    </React.Fragment>
  )
}

export default App
