const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const saltRounds = 10

async function login(userName, password) {
    if (!userName || !password) return Promise.reject('userName and password are required!')
    const user = await userService.getUser(userName, password)

    if (!user) return Promise.reject('Invalid user name or password')
    const match = await bcrypt.compare(password, user.password)
    
    if (!match) return Promise.reject('Invalid userName or password')
    delete user.password;
    console.log('logged in!');
    
    return user;
}

async function signup(email, password, userName, fullName) {
    if (!email || !password || !userName || !fullName) return Promise.reject('email, userName fullName and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    const user = await userService.add({email, password: hash, userName, fullName})
    delete user.password;
    return user;
}

module.exports = {
    signup,
    login,
}