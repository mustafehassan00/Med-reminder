const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// GET ROUTE FOR OBTAINING USER DESCRIPITION DATA
router.get('/', (req, res) => {
  let user = req.user;
  console.log(user);

  console.log('GET IS WORKING for user_description')

  const sqlText = `SELECT * FROM user_description
                INNER JOIN "user" ON 
                user_description."user_id" = "user".id
                WHERE "user".id = $1;`
  pool
    .query(sqlText, [user.id])
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
// POST ROUTE FOR ADDING THE USER DESCRIPTION
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


// GET ROUTE FOR MEDICATION DATA FOR THE SPECIFIC USER
router.get('/', (req, res) => {
  let user = req.user;
  const sqlText = `SELECT * FROM "Medication"
                    INNER JOIN "user" on "Medication"."user_id"= "user".id
                  WHERE "user".id= $1;`
  pool
    .query(sqlText, [user.id])
    .then((result) => {
      res.send(result.rows)
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('ERROR IN GETTING MEDICATION DATA FOR USER', err)
      res.sendStatus(500)
    })


})
// POST ROUTE FOR ADDING MEDICATION
router.post('/', (req, res) => {
  console.log('POST ROUTE FOR ADDING MEDICATION IS WORKING')
  const medName = req.body.Medication_name
  const medDesc = req.body.Medicattion_description
  const dosage = req.body.Dosage
  const time = req.body.Time

  const sqlText = `INSERT INTO "Medication"
                    ("Medication_name", "Medication_description", "Dosage", "Time")
                   VALUES
                   ($1, $2, $3, $4)`
  const sqlValue = [
    medName,
    medDesc,
    dosage,
    time
  ]
  pool
    .query(sqlText, sqlValue)
    .then((res) => {
      console.log('Result For Adding Medication is:', res)
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('ERROR IN POST ROUTE ADDING MEDICATION', err)
    })
})

module.exports = router;
