import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams(); // Extract the movie ID from the route params
  const { poster } = history.location.state; // Extract the poster URL from location state

  // Assuming you have a movieDetails state in your Redux store
  const movieDetails = useSelector((store) => store.movieDetails);

  useEffect(() => {
    // Fetch additional details for the selected movie
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: { id } });
  }, [dispatch, id]);

  // Check if movieDetails is still loading or not available
  if (!movieDetails || movieDetails.loading) {
    return <p>Loading...</p>;
  }

  const handleReturnToList = () => {
    // Navigate back to the movie list
    history.push('/');
  };

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img src={poster} alt={movieDetails.title} />
      <p>Release Date: {movieDetails.releaseDate}</p>
      <p>Director: {movieDetails.director}</p>
      {/* Add more details as needed */}

      {/* Return to Movie List button */}
      <button data-testid="toList" onClick={handleReturnToList}>
        Back to Movie List
      </button>
    </div>
  );
}
