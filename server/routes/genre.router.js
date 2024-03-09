const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const movieId = req.params.id;

  // Add query to get details for a specific movie by ID
  const query = `
  SELECT
  movies.*,
  array_agg(genres.name) AS genres
FROM
  movies
  JOIN movies_genres ON movies.id = movies_genres.movie_id
  JOIN genres ON movies_genres.genre_id = genres.id
GROUP BY
  movies.id, movies.title, movies.description
ORDER BY
  movies.id;
  `;

  pool
    .query(query) // Pass movieId as a parameter
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get movie details', err);
      res.sendStatus(500);
    });
});

module.exports = router;
