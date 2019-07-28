const express = require('express');
const { add, getBySurveyId , getByUserId, getMostAnweredSurveys, query, getAnswersByUserId} = require('./answer.controller')

const router = express.Router()
module.exports = router

//MOST ANSWERED SURVEY ID
router.get('/mostAnswered' , getMostAnweredSurveys)

//GETTING ANSWERS WITH QUERY
router.get('/', query)

//ADDING ANSWER
router.post('/', add)


//ANSWERED SURVEYS BY USER ID
router.get('/getAnswersByUserId', getAnswersByUserId)

//CONSIDER: let user remove his answers for specific survey
// router.delete('/:id', remove)
