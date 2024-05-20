const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('GET IS WORKING')
  let sqlText = `SELECT * FROM user_description;`
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows)
      console.log(".then is working in the GET")
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
});

module.exports = router;
