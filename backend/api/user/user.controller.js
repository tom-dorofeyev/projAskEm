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
    console.log('req!!!', req.session);

    const users = await userService.query()
    // console.log('BE: Got Users In User Controller Line 17', users);

    res.send(users)
}