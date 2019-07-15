const surveyService = require('../survey/survey.service')
// const logger = require('../../services/logger.service')

// const saltRounds = 10

async function query() {
    try{
        const surveys = await surveyService.query()
        return surveys
    } catch(err) {
        throw err
    }
}

async function add(survey){
    try {
        const surveyWithId = await surveyService.add(survey)
        return surveyWithId
    } catch(err){
        throw err
    }
}

async function remove(id){
    try {
        await surveyService.remove(id)
        return true
    } catch (err) {
        throw err
    }
}

async function getById(id){
    try {
        const foundSurvey = await surveyService.getById(id)
        return foundSurvey
    } catch (err) {
        throw err
    }
}

// async function signup(email, password, username) {
//     logger.debug(`auth.service - signup with email: ${email}, username: ${username}`)
//     if (!email || !password || !username) return Promise.reject('email, username and password are required!')

//     const hash = await bcrypt.hash(password, saltRounds)
//     const user = await userService.add({email, password: hash, username})
//     delete user.password;
//     return user;
// }

module.exports = {
    query,
    add,
    remove,
    getById
}