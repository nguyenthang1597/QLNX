import {HOST} from '../Config'
import axios from 'axios'

export const GetListPhuKien = (token) => {
    let url = `${HOST}/itemaccessary`;
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.get(url,{headers})
}

export const DelPhuKien = (token,id) => {
    let url = `${HOST}/itemaccessary/ma/`+id;
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.delete(url,{headers})
}

export const AddPhuKien = (token,data) => {
    let url = `${HOST}/itemaccessary`
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.post(url,data,{headers})
}