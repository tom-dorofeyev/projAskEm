module.exports = {
    getUser,
    getUsers
}

const userService = require('./user.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.send(user)
}

async function getUsers(req, res){
    const users = await userService.query()
    res.send(users)
}