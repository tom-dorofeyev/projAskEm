const express = require('express');
const { add, getBySurveyId , getByUserId} = require('./answer.controller')

const router = express.Router()
module.exports = router

// ANSWERS BY SURVEY ID
router.get('/:surveyId', getBySurveyId)

// ANSWERS BY USER ID
router.get('/:userId', getByUserId)

//ADDING ANSWER
router.post('/', add)

//CONSIDER: let user remove his answers for specific survey
// router.delete('/:id', remove)
