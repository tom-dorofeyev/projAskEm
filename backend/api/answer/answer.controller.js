const answerService = require('./answer.service')

module.exports = {
    add,
    getBySurveyId
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