import React, { useState } from 'react';
import { Table, Button, DivFlexRow } from '../../styles'
import { Input } from '../../styles'
import axios from 'axios';
import { HOST } from '../../Config'
import moment from 'moment'
import styled from 'styled-components';

const NewInput = styled(Input)`
    background-color: transparent;
    outline: none;
    border: none;
    text-align: center;
`;


export default () => {
    let [arr, setArr] = useState([]);
    let [dateStart, setDateStart] = useState(moment().format("YYYY-MM-DD"));
    let [isLoading, setLoading] = useState(false);
    document.title = 'Chấm công';
    const fetchData = async () => {
        let tmp = moment(dateStart).format('YYYY-MM-DD');
        
        setLoading(true);
        try {
            let res = await axios.get(`${HOST}/chamcong/theongay/ngay/${tmp}`);
            let arr = res.data;
            setLoading(false);
            await setArr(arr);
        } catch (error) {
            
        }
    };
    const uploadData = async () => {
        if(arr.length){
            try {
                let ngay = moment(dateStart).format('YYYY-MM-DD');
                let tmp = arr.map(e => {
                    let _tmp = {...e};
                    delete _tmp['ten'];
                    delete _tmp['ma'];
                    return _tmp;
                });
                let res = await axios.post(`${HOST}/chamcong/theongay/ngay/${ngay}`, {
                    chitiet: tmp
                });
                alert('Thành công!');
            } catch (error) {
                console.log(error);
                alert('Chấm công không thành công!');
            }

        }
    };
    const handleTextInput = (index, name, value) => {
        let newArr = [...arr];
        if(name ==='ghichu')
            newArr[index][name] = value;
        else
        newArr[index][name] = Number.parseInt(value || 0);
        setArr(newArr);
    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Chấm công</h1>
            <DivFlexRow style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <DivFlexRow style={{ alignItems: 'center' }}>
                    <label style={{ marginLeft: 10 }}>Ngày: </label>
                    <Input type="date" data-date-format="dd mm yyyy" max={new Date()} value={dateStart} style={{ marginLeft: 10 }} onChange={(e) => setDateStart(e.target.value)} />
                </DivFlexRow>
                <Button onClick={isLoading ? null : () => fetchData()}>
                    {isLoading ? <i className="fas fa-spinner fa-pulse"></i> : "Lấy danh sách" }
                </Button>
            </DivFlexRow>
            <Table style={{ marginTop: 15 }}>
                <tbody>
                    <tr>
                        <th>Nhân viên</th>
                        <th>Tiền công</th>
                        <th>VSPK</th>
                        <th>VSBĐ</th>
                        <th>Ghi chú</th>
                    </tr>
                    {
                        arr.map((e, index) => (
                            <tr key={index}>
                                <td>{e.ten || ''}</td>
                                <td>{e.tiencong || 0}</td>
                                <td><NewInput type='number' min={0} value={arr[index]['vskp']} onChange={(e) => handleTextInput(index, 'vskp', e.target.value)}/></td>
                                <td><NewInput type='number' min={0} value={arr[index]['vsbd']} onChange={(e) => handleTextInput(index, 'vsbd', e.target.value)}/></td>
                                <td><NewInput value={arr[index].ghichu ? arr[index].ghichu: ''} onChange={(e) => handleTextInput(index, 'ghichu', e.target.value)}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <DivFlexRow style={{ marginTop: 25, marginBottom: 5, justifyContent: 'space-between' }}>
                <label></label>
                <Button onClick={() => uploadData()}>
                    Lưu
                </Button>
            </DivFlexRow>
        </div>
    )
}