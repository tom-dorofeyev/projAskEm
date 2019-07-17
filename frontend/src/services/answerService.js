export default {
    add,
    query,
    getById,
    getBySurveyId,
    add,
}

import httpService from './httpService'
const API_KEY = 'answer'

async function add(submition){
    return await httpService.post(API_KEY, submition)
}

async function query() {
    return await httpService.get(API_KEY)
}

//TODO: when moving to mongo, make the request filter on the db side.
async function getBySurveyId(surveyId) {
    let answers = await httpService.get(`${API_KEY}/${surveyId}`)
    var surveyAnswers = answers
    return surveyAnswers
}

async function getById(id){
    return await httpService.get(`${API_KEY}/${id}`)
}
