export default {
    signup,
    login,
    logout,
    getById
}

import httpService from './httpService'

async function login(userCred) {
    return await httpService.post('auth/login',  {userName: userCred.userName, password: userCred.password})
}
async function signup(userCred) {
    return await httpService.post('auth/signup', userCred)
}
function logout() {
    httpService.post('auth/logout', '')
}

async function getById(id){
    return await httpService.get(`user/${id}`)
}
