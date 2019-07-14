export default {
    add,
    query,
    getById,
    submit
}

import httpService from './httpService'

async function add(survey) {
    return await httpService.post('surveys', survey)
}

async function submit(submition){
    console.log(submition, 'service got')
}

async function query() {
    return await httpService.get('surveys')
}

async function getById(id){
    return await httpService.get(`surveys/${id}`)
}