const express = require('express');
const { add, getBySurveyId } = require('./answer.controller')

const router = express.Router()
module.exports = router

// //ANSWER LIST
// router.get('/', query)

// ANSWERS BY SURVEY ID
router.get('/:id', getBySurveyId)

//ADDING ANSWER
router.post('/', add)

//REMOVE ANSWER
// router.delete('/:id', remove)
