const surveyService = require('../survey/survey.service');
const express = require('express');
const {query, geyById, update, remove, add} = require('./auth.controller')

const router = express.Router()
module.exports = router

//TODO: add error throwing and cathcing to every request

//SURVEY LIST
router.get('/', query)

//SINGLE SURVEY
router.get('/:id', (req, res) => {
    const surveyId = req.params.id
    surveyService.getById(surveyId)
        .then(survey => res.json(survey))
})

//ADDING SURVEY
router.post('/', add)

//REMOVE SURVEY
router.delete('/:id', remove)

//EDITING SURVEY
router.put('/:id', (req, res) => {
    const survey = req.body;
    // const currUser = req.session.user;
    //TODO: send current user
        surveyService.update(survey)
            .then(survey => res.json(survey))
})
