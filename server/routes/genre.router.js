const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `
  SELECT movies.* , genres.name FROM movies
  JOIN movies_genres ON movies.id = movies_genres.movie_id
  JOIN genres ON movies_genres.genre_id = genres.id;
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500);
    });
});

module.exports = router;
