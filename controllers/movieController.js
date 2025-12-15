const connection = require("../database/db");

// index
function index(req, res) {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(results);
  });
}

// show movie
function show_movie(req, res) {
  const id = req.params.id;
  const sql = "SELECT * FROM movies WHERE movies.id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (results.length === 0)
      return res.status(404).json({ error: "Movie not found" });
    res.json(results[0]);
  });
}

// show reviews
function show_reviews(req, res) {
  const id = req.params.id;
  const sql = "SELECT * FROM reviews WHERE movie_id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (results.length === 0)
      return res.status(404).json({ error: "Review not found" });
    res.json(results);
  });
}

// store
function store(req, res) {
  const sql =
    "INSERT INTO reviews (name, vote, text, created_at, updated_at) VALUES (?, ?, ?, ?, ?)";

  connection.query(sql, [name, vote, text, created_at, updated_at], (err, results) => {
    if(err) return res.status(500).json({error: 'Database query failed'})
  res.send('Add review')
  })
}

module.exports = { index, show_movie, show_reviews, store };
