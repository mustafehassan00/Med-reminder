const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




// GET ROUTE FOR MEDICATION DATA FOR THE SPECIFIC USER
router.get('/', (req, res) => {
    let user = req.user;
    console.log('GET ROUTE FOR MEDICATION DATA IS WORKING')

    const sqlText = `SELECT * FROM "Medication"
                      INNER JOIN "user" on "Medication"."user_id"= "user".id
                    WHERE "user".id= $1;`
    pool
      .query(sqlText, [user.id])
      .then((result) => {
        res.send(result.rows)
      })
      .catch((err) => {
        console.log('ERROR IN GETTING MEDICATION DATA FOR USER', err)
        res.sendStatus(500)
      })
  
  
  })
  // POST ROUTE FOR ADDING MEDICATION
  router.post('/', (req, res) => {
    console.log('POST ROUTE FOR ADDING MEDICATION IS WORKING')
    const Medication_name = req.body.Medication_name
    const Medication_description = req.body.Medication_description
    const Dosage = req.body.Dosage
  
  
    const sqlText = `INSERT INTO "Medication"
                      ("Medication_name", "Medication_description", "Dosage")
                     VALUES
                     ($1, $2, $3)`
    const sqlValue = [
      Medication_name,
      Medication_description,
      Dosage
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