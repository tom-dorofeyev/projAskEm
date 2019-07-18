const answerService = require('./answer.service')

module.exports = {
    add,
    getBySurveyId,
    getByUserId,
    getMostAnweredSurveys
}


async function getMostAnweredSurveys(req, res) {
    try {
        const mostAnsweredSurveys = await answerService.getMostAnweredSurveys()
        res.json(mostAnsweredSurveys)
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function getByUserId(req, res) {
    const { userId } = req.params
    try {
        const answersFound = await answerService.getByUserId(userId)
        res.json(answersFound)
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function getBySurveyId(req, res) {
    const { surveyId } = req.params
    try {
        const answersFound = await answerService.getBySurveyId(surveyId)
        res.json(answersFound)
    } catch (error) {
        res.status(500).send({ error })
    }
}

async function add(req, res) {
    const answer = req.body
    try {
        const answerWithId = await answerService.add(answer)
        res.json(answerWithId)
    } catch (error) {
        res.status(500).send({ error })
    }
}