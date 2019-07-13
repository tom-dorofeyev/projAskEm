export default {
    DB,
    add
}

import DB from '../data/surveyDB'
import httpService from './httpService'

async function add(survey) {
    return await httpService.post('surveys', survey)
}