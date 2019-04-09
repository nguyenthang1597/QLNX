import {HOST} from '../Config'
import axios from 'axios'

export const GetBillTheoNgay = (token,start, end) => {
    let url = `${HOST}/statistic/bill?end=${end}&start=${start}`;
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.get(url,{headers})
}