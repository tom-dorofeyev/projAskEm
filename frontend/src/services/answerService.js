import httpService from './httpService'

export default {
    submit,
}

async function submit(submition){
    return await httpService.post('answers', submition)
}