const surveyService = require('../survey/survey.service');
const express = require('express');
const {query, getById, update, remove, add} = require('./auth.controller')

const router = express.Router()
module.exports = router

//SURVEY LIST
router.get('/', query)

//SINGLE SURVEY
router.get('/:id', getById)

//ADDING SURVEY
router.post('/', add)

//REMOVE SURVEY
router.delete('/:id', remove)

//CONSIDER: adding edit survey
