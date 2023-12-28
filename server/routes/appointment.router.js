const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  const query = `SELECT "appointments"."id", "appointments"."user_id", "appointments"."time_completed", "appointments"."first_name", "appointments"."last_name", 
  "appointments"."email", "appointments"."phone_number", "appointments"."address", "appointments"."zip", "appointments"."description", "appointments"."budget", "appointments"."user_id", "appointments"."service_id"
  FROM "appointments"
  INNER JOIN "user"
  ON "appointments"."user_id" = "user"."id"
  WHERE "user"."id" = ${req.params.id};
  `; pool
  .query(query)
  .then(result => {
    console.log("results.rows", result);
    res.send(result.rows);
  })
  .catch((err) => {
    console.log("ERROR: Get all genres", err);
    res.sendStatus(500);
  });

});



/**
 * POST route template
 */
router.post('/', (req, res) => {
  const query = `
  INSERT INTO "appointments" ("first_name", "last_name", "email", "phone_number", "address", "zip", "description","budget", "user_id","service_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ,$9, $10);
  `
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.phone_number,
    req.body.address,
    req.body.zip,
    req.body.description,
    req.body.budget,
    req.user.id,
    req.body.service_id

  ]

  console.log("dssdcsdc")
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

router.delete('/:id', (req, res) => {
  const query = `
    DELETE FROM "appointments"
    WHERE id = $1;
  `;
  const values = [req.params.id];

  pool
    .query(query, values)
    .then(result => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('DELETE route failed:', err);
      res.sendStatus(500);
    });
});


module.exports = router;
