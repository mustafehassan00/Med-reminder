const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let sqlText = "SELECT * FROM user_description;"
  pool
    .query(sqlText)
  console.log('GET route is working')
    .then((result) => {
      res.sendStatus(result.rows)
      console.log(".then is working in the GET")
    })
    .catch((err) => {
      console.log('ERROR IN GET ROUTE', err)
    })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
