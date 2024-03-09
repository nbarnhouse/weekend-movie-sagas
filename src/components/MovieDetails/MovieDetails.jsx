import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const movies = useSelector((store) => store.movies);
  const genres = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_MOVIES' });
  // }, []);

  const handleReturnToList = () => {
    // Navigate back to the movie list
    history.push('/');
  };

  // const selectedMovie = movies.find((movie) => movie.id === Number(id));
  const selectedGenre = genres.find((genre) => genre.id === Number(id));

  console.log('Current Movie ID:', id);

  const formatGenres = (genresArray) => genresArray.join(', ');

  return (
    <main>
      <h1>Movie List</h1>
      {/* <section>
        {selectedMovie ? (
          <div key={selectedMovie.id}>
            <p>{selectedMovie.title}</p>
            <p>{selectedMovie.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section> */}
      <section data-testid="movieDetails">
        <div>
          {selectedGenre ? (
            <div key={selectedGenre.id}>
              <p>{selectedGenre.title}</p>
              <p>
                <img src={selectedGenre.poster} alt={selectedGenre.title} />
              </p>

              <p>Description: {selectedGenre.description}</p>
              <p>Genres: {formatGenres(selectedGenre.genres)}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>

      {/* Return to Movie List button */}
      <button data-testid="toList" onClick={handleReturnToList}>
        Back to Movie List
      </button>
    </main>
  );
}
