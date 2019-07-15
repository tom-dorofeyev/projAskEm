import router from '@/router'


//when working on our server add word API to BASE_URL
const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : '//localhost:3000/'


import Axios from 'axios';
var axios = Axios.create({
    withCredentials: true
});

async function ajax(endpoint, method='get', data=null) {
    try {
        const res = await axios({
            url: BASE_URL + endpoint,
            method,
            data
        })
        return res.data;
    } catch (err) {
        if (err.response.status === 401) {
            router.push('/');
        }

    }
}

export default {
    get(endpoint, data){
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data){
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data){
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data){
        return ajax(endpoint, 'DELETE', data)
    }

}