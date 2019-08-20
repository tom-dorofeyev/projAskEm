module.exports = {
    query,
    add,
    remove,
    getById,
    update
}

const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION_KEY = 'survey'

async function query(filterBy = {}) {
    const criteria = {};

    if (filterBy.name) {
        criteria.name = {$regex:'(?i)' + _quote(filterBy.name)}
    }

    if (filterBy.type) {
        criteria.type = filterBy.type;
    }
    if (filterBy.createdBy) {
        criteria["createdBy._id"] = filterBy.createdBy;
    }

    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const surveys = await collection.find(criteria).toArray();
        const sorted = surveys.reverse()
        return sorted
    } catch (err) {
        logger.error('cannot find surveys')
        throw err;
    }
}

async function add(survey) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const surveyWithId = await collection.insertOne(survey);
        return surveyWithId;
    } catch (err) {
        logger.error(`cannot insert survey`)
        throw err;
    }
}

async function remove(surveyId) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        await collection.remove({ "_id": ObjectId(surveyId) })
    } catch (err) {
        logger.error(`cannot remove survey ${surveyId}`)
        throw err;
    }
}

async function update(survey) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        let surveyId = survey._id;
        delete survey._id
        await collection.updateOne({ "_id": ObjectId(surveyId) }, { $set: survey })
        return survey
    } catch (err) {
        logger.error(`cannot update surveyId ${survey._id}`)
        throw err;
    }
}

async function getById(surveyId) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const survey = await collection.findOne({ "_id": ObjectId(surveyId) })
        return survey
    } catch (err) {
        logger.error(`cannot find survey ${surveyId}`)
        throw err;
    }
}

function _quote(regex) {
    return regex.replace(/([()[{*+.$^\\|?])/g, '\\$1');
  }

