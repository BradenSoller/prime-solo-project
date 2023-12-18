const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const query = `
  INSERT INTO "appointments" ("first_name", "last_name", "email", "phone_number", "address", "zip", "description","budget" )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
  `
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.phone_number,
    req.body.address,
    req.body.zip,
    req.body.description,
    req.body.budget
  ]
  console.log(req.body.description)
  pool
    .query(query, values)
    .then(result => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.error('POST route failed:', err)
      res.sendStatus(500)
    })
   
});

module.exports = router;
