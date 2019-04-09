import {HOST} from '../Config'
import axios from 'axios'

export const SaveBill = (token,data) => {
    let url = `${HOST}/billsuachua`;
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.post(url,data,{headers})
}

export const SaveBillBanLe = (token, data) => {
    let url = `${HOST}/billle`;
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.post(url,data,{headers})
}

export const GetBillSuaChuaByMaHoaDon = (token, mahoadon) => {
    let url = `${HOST}/billsuachua/mahoadon/${mahoadon}/chitiet`;
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.get(url,{headers})
}

export const GetBillBanLeByMaHoaDon = (token, mahoadon) => {
    let url = `${HOST}/billle/mahoadon/${mahoadon}/chitiet`;
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.get(url,{headers})
}


export const ThanhToan = (token, mahoadon) => {
    let url = `${HOST}/bill/mahoadon/${mahoadon}/thanhtoan`;
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.put(url,{headers})
}

export const HuyThanhToan = (token, mahoadon) => {
    let url = `${HOST}/bill/mahoadon/${mahoadon}/huy`;
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return axios.delete(url,{headers})
}