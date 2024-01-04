const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  let query = ''
  if (req.user.isAdmin) {
    query = `SELECT "appointments"."id","appointments"."time_completed","appointments"."first_name", "services"."name","appointments"."last_name", 
  "appointments"."email", "appointments"."phone_number", "appointments"."address", "appointments"."zip", "appointments"."description", "appointments"."budget", "appointments"."status", "appointments"."user_id", "appointments"."service_id"
  FROM "appointments"
  INNER JOIN "services"
   ON  "appointments"."service_id" = "services"."id"
  INNER JOIN "user"
  ON "appointments"."user_id" = "user"."id"`
  }
  else {
    query = `SELECT "appointments"."id","appointments"."time_completed","appointments"."first_name", "services"."name","appointments"."last_name", 
  "appointments"."email", "appointments"."phone_number", "appointments"."address", "appointments"."zip", "appointments"."description", "appointments"."budget", "appointments"."user_id", "appointments"."service_id"
  FROM "appointments"
  INNER JOIN "services"
   ON  "appointments"."service_id" = "services"."id"
  INNER JOIN "user"
  ON "appointments"."user_id" = "user"."id"
  WHERE "user"."id" = ${[req.user.id]}
  
  `
  };
  pool
  .query(query)
  .then(result => {
    console.log("results.rows", result.rows);
    res.send(result.rows);
    console.log();
  })
  .catch((err) => {
    console.log("ERROR: Get all appointments", err);
    res.sendStatus(500);
  });

});

router.get('/:id', (req, res) => {
  const sqlText = `
  SELECT "appointments"."id", "appointments"."time_completed","appointments"."first_name", "services"."name","appointments"."last_name", 
  "appointments"."email", "appointments"."phone_number", "appointments"."address", "appointments"."zip", "appointments"."description", "appointments"."budget", "appointments"."user_id", "appointments"."service_id"
  FROM "appointments"
  INNER JOIN "services"
   ON  "appointments"."service_id" = "services"."id"
        WHERE "appointments"."id" = $1;
  `
  const sqlValues = [req.params.id]

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      const appointmentDetails = dbRes.rows[0]
      res.send(appointmentDetails)
    })
    .catch((dbErr) => {
      console.log('GET /appointments/:id fail:', dbErr)
      res.sendStatus(500)
    })
})

router.put('/:id', (req, res) => {
  console.log('serviceID:',req.body.service_id);
  // Update this single student
  const idToUpdate = req.params.id;
  const sqlText = `
  UPDATE "appointments"
  SET "first_name" = $1,
  "last_name" = $2,
  "email" = $3,
  "phone_number" = $4,
  "address" = $5,
  "zip" = $6,
  "description" = $7,
  "budget" = $8,
  "service_id" = $9
  WHERE "id"= $10;
  `;

  
  pool.query(sqlText, [req.body.first_name, req.body.last_name, req.body.email, req.body.phone_number, req.body.address, req.body.zip, req.body.description, req.body.budget, req.body.service_id, idToUpdate] )
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
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
