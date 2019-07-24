const answerService = require('./answer.service')

module.exports = {
    add,
    getMostAnweredSurveys,
    query
}

async function query(req, res){
    const filterBy = req.query
    try {
        const answers = await answerService.query(filterBy)
        res.json(answers)

    } catch (error) {       
        res.status(500).send({error})
    }
}

async function getMostAnweredSurveys(req, res) {
    try {
        const mostAnsweredSurveys = await answerService.getMostAnweredSurveys()
        res.json(mostAnsweredSurveys)
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