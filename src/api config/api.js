import axios from 'axios'

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL ||'https://api.kudzoka.com/api/',

    headers:{
        'content-type':'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})