module.exports = {
    add,
    getBySurveyId,
    getByUserId
}

const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION_KEY = 'answer'


async function getByUserId(id) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        return await collection.find({userId : id}).map(submition => submition.answers).toArray();
    } catch (err) {
        console.log(`ERROR: cannot get answers by survey ID`)
        throw err;
    }
}

async function getBySurveyId(id) {
    console.log('I am in here back end',id)
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