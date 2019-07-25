const bcrypt = require('bcryptjs')
const userService = require('../user/user.service')
const saltRounds = 10

module.exports = {
    signup,
    login,
}


async function login(userName, password) {

    if (!userName || !password) return Promise.reject('User name and password are required!')

    const user = await userService.getUser(userName)
    if (!user) return Promise.reject('Invalid user name or password')

    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid user name or password')
    
    delete user.password;    
    return user;
}

async function signup(email, password, userName, fullName) {
    if (!email || !password || !userName || !fullName) return Promise.reject('Email, user name, full name and password are required!')
    if (!_validateEmail(email)) return Promise.reject('Invalid Email, user name, full name or password!')
    
    const userNameTaken = await userService.getUser(userName)    
    if(userNameTaken) return Promise.reject('User name is taken!')
    
    const hash = await bcrypt.hash(password, saltRounds)
    const user = await userService.add({email, password: hash, userName, fullName})

    delete user.password;
    return user;
}

//---------------------------------
//VALIDATE EMAIL FUNCTION 

function _validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}