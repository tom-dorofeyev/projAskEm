export default {
    signup,
    login,
    logout,
    getById,
    query,
}

import httpService from './httpService'

async function login(userCred) {
    try {
        const user = await httpService.post('auth/login', userCred);
        sessionStorage.setItem('user', JSON.stringify(user));
        return user
    } catch (err) {
        
        throw err
    }
}

async function signup(userCred) {
    try {
        const user = await httpService.post('auth/signup', userCred);
        sessionStorage.setItem('user', JSON.stringify(user));
        return user
    } catch (err) {
        throw err
    }
}

function logout() {
    try {
        httpService.post('auth/logout');
        sessionStorage.removeItem('user');
    } catch (err) {
        throw err
    }
}

async function getById(id) {
    return await httpService.get(`user/${id}`);
}

async function query() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(!user) return
    return await httpService.get(`user/${user._id}`)
}
