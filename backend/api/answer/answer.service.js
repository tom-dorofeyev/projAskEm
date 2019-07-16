module.exports = {
    add,
    getBySurveyId
}

const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION_KEY = 'answer'


async function getBySurveyId(id) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        return await collection.find({surveyId : id}).map(submition => submition.answers).toArray();
    } catch (err) {
        console.log(`ERROR: cannot get answers by survey ID`)
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