export default {
    add,
    query,
    getById,
    shortenUrl
}

import httpService from './httpService'
import axios from 'axios'
const PHOTO_KEY = 'https://api.unsplash.com/search/photos/'
const URL_API = 'https://hideuri.com/api/v1/shorten'
const photoClientId = 'b51860a1e3ca293d18665117be530181d5ecb34b7e14f2f963605050a6f63a91'

async function add(survey) {
    try {
        await _addUrlToSurvey(survey)
    } catch (err) { }
    return await httpService.post('survey', survey)
}

async function shortenUrl(surveyPath) {
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
      try {
    var qs = require('qs');
    const res = await axios.post(URL_API, qs.stringify({url: surveyPath}), config)
    console.log(res)
    } catch (err) { }
}

async function query(filterBy) {
    return await httpService.get('survey', null, filterBy)
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
