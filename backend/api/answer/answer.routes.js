const express = require('express');
const { add, getBySurveyId , getByUserId, getMostAnweredSurveys} = require('./answer.controller')

const router = express.Router()
module.exports = router

//MOST ANSWERED SURVEY ID
router.get('/mostAnswered' , getMostAnweredSurveys)


// ANSWERS BY USER ID
router.get('/userAnswers/:userId', getByUserId)

// ANSWERS BY SURVEY ID
router.get('/surveyAnswers/:surveyId', getBySurveyId)

//ADDING ANSWER
router.post('/', add)

//CONSIDER: let user remove his answers for specific survey
// router.delete('/:id', remove)
