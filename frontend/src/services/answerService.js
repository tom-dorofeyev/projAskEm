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

async function getBySurveyId(surveyId) {
    let allSurveySubmitions = await httpService.get(API_KEY + '/surveyAnswers/' + surveyId)
    return _getSummedResults(allSurveySubmitions)
}

async function getById(id){
    return await httpService.get(`${API_KEY}/${id}`)
}

function _getSummedResults(array){
    return array.reduce((sum ,submition) => {
        submition.forEach((answer, idx) => {
            const currResult = sum[idx]
            if(currResult) {
                if(answer.optIdx || answer.optIdx === 0){
                    let optIdx = answer.optIdx
                    currResult[optIdx] = (currResult[optIdx] || 0) + 1
                } else if(answer.optionsIdxs) {
                    const answeredOpts = answer.optionsIdxs;
                    answeredOpts.forEach(currAns => {
                        currResult[currAns] = (currResult[currAns] || 0 ) + 1
                    })
                }
            } else {
                let currResult = {}
                if(answer.optIdx){
                    currResult[answer.optIdx]  = 1
                } else if(answer.optionsIdxs) {
                    answer.optionsIdxs.forEach(currAns => {
                        currResult[currAns] = 1
                    })
                }
                sum.push(currResult)
            }
        })
        return sum
    }, [])
}
