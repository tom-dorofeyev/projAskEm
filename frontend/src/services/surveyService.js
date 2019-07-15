export default {
    add,
    query,
    getById,
}

import httpService from './httpService'

async function add(survey) {
    return await httpService.post('surveys', survey)
}

async function query() {
    return await httpService.get('surveys')
}

async function getById(id){
    return await httpService.get(`surveys/${id}`)
}