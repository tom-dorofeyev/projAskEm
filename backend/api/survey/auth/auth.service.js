const surveyService = require('../survey/survey.service')

async function query(filterBy={}) {
    try{
        const surveys = await surveyService.query(filterBy)
        return surveys
    } catch(err) {
        throw err
    }
}

async function add(survey){
    try {
        const surveyWithId = await surveyService.add(survey)
        return surveyWithId
    } catch(err){
        throw err
    }
}

async function remove(id){
    try {
        await surveyService.remove(id)
        return true
    } catch (err) {
        throw err
    }
}

async function getById(id){
    try {
        const foundSurvey = await surveyService.getById(id)
        return foundSurvey
    } catch (err) {
        throw err
    }
}

module.exports = {
    query,
    add,
    remove,
    getById
}
