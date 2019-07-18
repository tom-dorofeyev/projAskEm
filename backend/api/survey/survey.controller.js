module.exports = {
    query,
    add,
    remove,
    getById
}

const userService = require('./survey.service')
// const logger = require('../../services/logger.service')

async function query(req, res) {
    const filterBy = res.query;
    console.log(filterBy)
    try {
        const surveys = await userService.query(filterBy)
        res.json(surveys)
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function add(req, res) {
    const survey = req.body
    try {
        const surveyWithId = await userService.add(survey)
        res.json(surveyWithId)
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function remove(req, res) {
    const id = req.params.id
    try {
        await userService.remove(id)
        res.json({})
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function getById(req, res) {
    const id = req.params.id
    try {
        const foundSurvey = await userService.getById(id)
        res.json(foundSurvey)
    } catch (error) {
        res.status(500).send({ error })
    }
}