module.exports = {
    query,
    add,
    remove,
    getById,
    update
}

const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION_KEY = 'survey'

async function query(filterBy = {}){
    const criteria = {};

    if (filterBy.search) {
        criteria.name = {$regex:'(?i)' + _quote(filterBy.search)}
    }

    if (filterBy.type) {
        criteria.type = filterBy.type;
    }
    if(filterBy.createdBy) {
        criteria.createdBy = filterBy.createdBy;
    }

    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const surveys = await collection.find(criteria).toArray();
        const sorted = surveys.reverse()
        return sorted
    } catch (err) {
        console.log('ERROR: cannot find surveys')
        throw err;
    }
}

async function add(survey) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const surveyWithId = await collection.insertOne(survey);
        return surveyWithId;
    } catch (err) {
        console.log(`ERROR: cannot insert survey`)
        throw err;
    }
}

async function remove(surveyId) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        await collection.remove({"_id":ObjectId(surveyId)})
    } catch (err) {
        console.log(`ERROR: cannot remove survey ${surveyId}`)
        throw err;
    }
}

async function update(survey) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        let surveyId = survey._id;
        delete survey._id
        await collection.updateOne({"_id":ObjectId(surveyId)}, {$set : survey})
        return survey
    } catch (err) {
        console.log(`ERROR: cannot update surveyId ${survey._id}`)
        throw err;
    }
}

async function getById(surveyId) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const survey = await collection.findOne({"_id":ObjectId(surveyId)})
        return survey
    } catch (err) {
        console.log(`ERROR: cannot find survey ${surveyId}`)
        throw err;
    }
}

function _quote(regex) {
    return regex.replace(/([()[{*+.$^\\|?])/g, '\\$1');
  }

