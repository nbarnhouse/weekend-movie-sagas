import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const handleClickPoster = (movie) => {
    console.log(`poster clicked: ${movie.id}`);
    //navigate to details page
    history.push(`/details/${movie.id}`);
  };

  return (
    <main>
      <h1>Movie List</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div
              data-testid="movieItem"
              onClick={() => handleClickPoster(movie)}
              key={movie.id}
            >
              <h3>{movie.title}</h3>

              <img
                src={movie.poster}
                data-testid="toDetails"
                alt={movie.title}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
