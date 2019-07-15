export default {
    add
}

import httpService from './httpService'

async function add(user) {
    return await httpService.post('users', user)
}
