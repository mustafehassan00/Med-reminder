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
    let userID = req.body.user_id
    let user= req.user.id 
    userID = user 
    const Medication_name = req.body.Medication_name
    const Medication_description = req.body.Medication_description
    const Dosage = req.body.Dosage
    const Time= req.body.Time
  
  
    const sqlText = `INSERT INTO "Medication"
                      ("user_id","Medication_name", "Medication_description", "Dosage", "Time")
                     VALUES
                     ($1, $2, $3,$4,$5)
                     `
    const sqlValue = [
      userID,
      Medication_name,
      Medication_description,
      Dosage,
      Time
    ]
    pool
      .query(sqlText, sqlValue)
      .then((res) => {
        console.log('Result For Adding Medication is:', res)
      })
      .catch((err) => {
        console.log('ERROR IN POST ROUTE ADDING MEDICATION', err)
        res.sendStatus(500)
      })
  })







module.exports = router;