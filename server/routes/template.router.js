const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('GET IS WORKING for user_description')
  const sqlText = `SELECT * FROM user_description
                INNER JOIN "user" ON 
                user_description."user" = "user".id;`
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows)
    })
    .catch((err) => {
      console.log('ERROR IN GET ROUTE', err)
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('POST route for user_description is working!!!')
  const Name = req.body.Name
  const Bio = req.body.Bio
  const Height = req.body.Height
  const Weight = req.body.Weight
  const Address = req.body.Address
  const Age = req.body.Age
  const userCondition = req.body.user_condition

  const sqlText = `INSERT INTO user_description 
                  ("Name", "Bio", "Height", "Weight", "Address", "Age", user_condition) 
                VALUES
                  ($1, $2, $3, $4, $5, $6, $7)`

  const sqlValue = [
    Name,
    Bio,
    Height,
    Weight,
    Address,
    Age,
    userCondition
  ]

  pool
    .query(sqlText, sqlValue)
    .then((res) => {
      console.log('Result is:', res)
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('Error in Post user_description Route', err)
      res.sendStatus(500)
    })
});

module.exports = router;
