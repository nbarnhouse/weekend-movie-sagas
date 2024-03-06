import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  // const movie = useSelector((store) =>
  //   store.movies.find((m) => m.id === Number(id))
  // );
  const genres = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS', payload: id });
  }, [dispatch, id]);

  const handleReturnToList = () => {
    // Navigate back to the movie list
    history.push('/');
  };

  return (
    <div data-testid="movieDetails">
      <h1>Movie Details</h1>
      <h2>{genres.title}</h2>

      {/* <img src={genres.poster} alt={genres.title} />
      <p>Release Date: {genres.releaseDate}</p>
      <p>Director: {genres.director}</p> */}

      {/* Assuming genres is an array */}
      {/* <p>Genres: {genres.map((genre) => genre.name).join(', ')}</p> */}

      {/* Return to Movie List button */}
      <button data-testid="toList" onClick={handleReturnToList}>
        Back to Movie List
      </button>
    </div>
  );
}
