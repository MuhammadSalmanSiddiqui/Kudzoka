import axios from 'axios'

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL ||'https://cors-anywhere.herokuapp.com/http://35.246.116.99/api/',

    headers: {
        'Content-Type': 'multipart/form-data'
    }

    
})