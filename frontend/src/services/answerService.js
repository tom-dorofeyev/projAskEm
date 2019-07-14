export default {
    add,
    query,
    getById,
    submit
}

import httpService from './httpService'

async function add(survey) {
    return await httpService.post('answers', answer)
}

// async function submit(submition){
//     console.log(submition, 'service got')
// }

async function query() {
    return await httpService.get('answers')
}

async function getById(id){
    return await httpService.get(`answers/${id}`)
}