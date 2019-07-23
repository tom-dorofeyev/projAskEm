module.exports = {
    add,
    getMostAnweredSurveys,
    query
}

const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION_KEY = 'answer'

async function query(filterBy = {}){
    let criteria = {};

    if(filterBy.userId) {
        criteria.userId = `createdBy : _id: ${filterBy.userId}` ;
    }

    if(filterBy.surveyId) {
        criteria.surveyId = filterBy.surveyId;
    }

    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        return await collection.find(criteria).map(submition => submition.answers).toArray();       
    } catch (err) {
        throw err;
    }
}

async function getMostAnweredSurveys() {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        let map =  await collection.find().toArray()
        map = map.reduce((acc, ans) => {
            acc[ans.surveyId] = (acc[ans.surveyId] || 0) + 1
            return acc
        }, {});
        let sortedAnswers = Object.keys(map).sort((a,b) => map[a] < map[b]).filter((ans, idx) => {
            if(idx < 3) return ans
        })
        return sortedAnswers

    } catch (err) {
        console.log(`ERROR: cannot get most answered`)
        throw err;
    }
}

async function add(answer) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const answerWithId = await collection.insertOne(answer);
        return answerWithId;
    } catch (err) {
        console.log(`ERROR: cannot insert answer`)
        throw err;
    }
}