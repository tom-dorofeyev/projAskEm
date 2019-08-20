module.exports = {
    query,
    add,
    remove,
    getById
}

const surveyService = require('./survey.service')

async function query(req, res) {
    const filterBy = req.query;
    try {
        const surveys = await surveyService.query(filterBy)
        res.json(surveys)
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function add(req, res) {
    const survey = req.body
    try {
        const surveyWithId = await surveyService.add(survey)
        res.json(surveyWithId)
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function remove(req, res) {
    const id = req.params.id
    try {
        await surveyService.remove(id)
        res.json({})
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function getById(req, res) {
    const id = req.params.id   
    try {
        const foundSurvey = await surveyService.getById(id)
        res.json(foundSurvey)
    } catch (error) {
        res.status(500).send({ error })
    }
}