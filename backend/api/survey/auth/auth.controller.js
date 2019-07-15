const authService = require('./auth.service')
// const logger = require('../../services/logger.service')

async function query(req, res) {
    const filterBy = res.query;
    try {
        const surveys = await authService.query(filterBy)
        res.json(surveys)
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function add(req, res) {
    const survey = req.body
    try {
        const surveyWithId = await authService.add(survey)
        res.json(surveyWithId)
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function remove(req, res) {
    const id = req.params.id
    try {
        await authService.remove(id)
        res.json({})
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function getById(req, res) {
    const id = req.params.id
    try {
        const foundSurvey = await authService.getById(id)
        res.json(foundSurvey)
    } catch (error) {
        res.status(500).send({ error })
    }
}

module.exports = {
    query,
    add,
    remove,
    getById
}