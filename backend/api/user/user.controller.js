module.exports = {
    getUser,
    getUsers
}

const userService = require('./user.service')

async function getUser(req, res) {  
    try {
        const user = await userService.getById(req.params.id)
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

async function getUsers(req, res){
    
    try {
        const users = await userService.query()
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send({ error: err })
    }
}