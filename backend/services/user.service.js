module.exports = {
    query,
    add,
    remove,
    getById,
    update,
    getUser
}
const fs = require('fs')

const dbService = require('./db.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION_KEY = 'user'

async function getUser(username, password) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    const foundUser = await collection.findOne({nickname:username, password:password})
    if(foundUser) return foundUser
    else throw new Error
}

async function query() {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const users = await collection.find(criteria).toArray();
        return users
    } catch (err) {
        console.log('ERROR: cannot find toys')
        throw err;
    }
}

async function add(user) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

async function remove(userId) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        await collection.remove({ "_id": ObjectId(userId) })
    } catch (err) {
        console.log(`ERROR: cannot remove user ${userId}`)
        throw err;
    }
}

async function update(user) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        let userId = user._id;
        delete user._id
        await collection.updateOne({ "_id": ObjectId(userId) }, { $set: user })
        return user
    } catch (err) {
        console.log(`ERROR: cannot update userId ${user._id}`)
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const user = await collection.findOne({ "_id": ObjectId(userId) })
        return user
    } catch (err) {
        console.log(`ERROR: cannot find user ${userId}`)
        throw err;
    }
}