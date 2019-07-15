export default {
    add,
    query,
    getById,
    getBySurveyId,
    add,
}

import httpService from './httpService'

async function add(submition){
    return await httpService.post('answers', submition)
}

async function query() {
    return await httpService.get('answers')
}

//TODO: when moving to mongo, make the request filter on the db side.
async function getBySurveyId(surveyId) {
    let answers = await query()
    var surveyAnswers = answers.filter(answer => {
        return answer.surveyId === surveyId
    })
    return surveyAnswers
}

async function getById(id){
    return await httpService.get(`answers/${id}`)
}
