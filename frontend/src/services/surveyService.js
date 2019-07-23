export default {
    add,
    query,
    getById,
}

import httpService from './httpService'
import axios from 'axios'
const PHOTO_KEY = 'https://api.unsplash.com/search/photos/'
const photoClientId = 'b51860a1e3ca293d18665117be530181d5ecb34b7e14f2f963605050a6f63a91'

async function add(survey) {
    try {
        await _addUrlToSurvey(survey)
    } catch (err) { }
    return await httpService.post('survey', survey)
}

async function query() {
    return await httpService.get('survey')
}

async function getById(id) {
    return await httpService.get(`survey/${id}`)

}

async function _addUrlToSurvey(survey) {
    try {
        const tagToSearchIdx = _getRndInteger(0, survey.tags.length - 1)
        const params = { client_id: photoClientId, query: survey.tags[tagToSearchIdx] }
        axios.defaults.withCredentials = false;
        const res = await axios.get(PHOTO_KEY, { params })
        axios.defaults.withCredentials = true;
        const imageList = res.data
        const imageIdx = _getRndInteger(0, imageList.results.length - 1)
        survey.imageUrl = imageList.results[imageIdx].urls.regular;
    } catch (err) { }
    
}

function _getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}