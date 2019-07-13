export default {
    DB,
    add,
    read
}

import DB from '../data/surveyDB'
import httpService from './httpService'

async function add(survey) {
    return await httpService.post('surveys', survey)
}

async function read() {
    return await httpService.get('surveys')
}