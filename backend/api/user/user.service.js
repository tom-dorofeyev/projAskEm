module.exports = {
    query,
    add,
    remove,
    getById,
    update,
    getUser,
}

const fs = require('fs')

const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION_KEY = 'user'

async function query() {
    
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const users = await collection.find().toArray();
        return users
    } catch (err) {
        return Promise.reject('Couldn\'t Find Users')
    }
}

async function add(user) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        await collection.insertOne(user);
        return user;
    } catch {
        return Promise.reject('Couldn\'t Add User')
    }
}

async function remove(userId) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        await collection.remove({ "_id": ObjectId(userId) })
    } catch (err) {
        return Promise.reject('Couldn\'t Remove User')
    }
}

async function update(user) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        let userId = JSON.parse(JSON.stringify(user._id));
        delete user._id
        await collection.updateOne({ "_id": ObjectId(userId) }, { $set: user })
        return user
    } catch (err) {
        return Promise.reject('Couldn\'t Update User')
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try {
        const user = await collection.findOne({ "_id": ObjectId(userId) })
        return user
    } catch (err) {
        return Promise.reject('Couldn\'t Get User with This ID')
    }
}


async function getUser(userName) {
    const collection = await dbService.getCollection(COLLECTION_KEY)
    try{
        const foundUser = await collection.findOne({userName})
        if(foundUser) return foundUser
    } catch(err){
        return Promise.reject('Couldn\'t Find User with This User Name')
    }
}
