import router from '@/router'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:3000/api/'


// import Axios from 'axios';
// var axios = Axios.create({
//     withCredentials: true
// });

import axios from 'axios'
axios.defaults.withCredentials = true;

async function ajax(endpoint, method='get', data=null, query=null) {   
    try {
        const res = await axios({
            url: BASE_URL + endpoint,
            method,
            data,
            params:query
        })
        return res.data;
    } catch (err) {
        
        if (err.response.status === 401) {
            router.push('/');
        } 
        throw err.response.data.error
    }
}

export default {
    get(endpoint, data, query){
        return ajax(endpoint, 'GET', data, query)
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