export default {
    add
}

async function add(user) {
    return await httpService.post('users', user)
}