export default {
    add,
    query,
    getById
}

import httpService from './httpService'
import axios from 'axios'

async function add(survey) {
    return await httpService.post('survey', survey)
}

async function query() {
    return await httpService.get('survey')
}

async function getById(id){
    return await httpService.get(`survey/${id}`)

}
