import React, {useState } from 'react';
import { Table, Button, DivFlexRow } from '../../styles'
import { Input } from '../../styles'
import axios from 'axios';
import { HOST } from '../../Config'
import moment from 'moment'
import styled from 'styled-components';
// const NewInput = styled(Input)`
//     background-color: transparent;
//     outline: none;
//     border: none;
//     text-align: center;
// `
const handleDateInput = function(){
    let [value, setValue] = useState(moment().format('YYYY-MM-DD'));
    const onChange =async function(e){
        await setValue(moment(e.target.value).format('YYYY-MM-DD'));
    }

    return {
        value, onChange
    }

}

export default () => {
    let start = handleDateInput();
    let end = handleDateInput();
    let [data, setData] = useState([]);
    let [nv, setNV] = useState([]);
    let [sum, setSum] = useState({});
    const fetchData = async () => {
        let url = `${HOST}/statistic/chamcong/employee?start=${start.value}&end=${end.value}`;
        try {
            let res =  await axios.get(url);
            let arr = res.data;
            if(arr[0]){
                let tmp = arr[0].data.map(e => e.ten).sort((a, b) => a < b);
                let tmp2 = [];
                arr.forEach(element => {
                    tmp2 = tmp2.concat(element.data)
                });
                let  tmp3 = tmp2.reduce((prev, cur) => {
                    if(prev[cur.ten]){
                        prev[cur.ten] += cur.tiencong + cur.vskp + cur.vsbd;
                    }
                    else
                        prev[cur.ten] = cur.tiencong + cur.vskp + cur.vsbd;
                    return prev;
                }, {});
                setSum(tmp3)
                
                setNV([...new Set(tmp)])
            }
            
            setData(arr);
        } catch (error) {
            console.log(error);
            alert('Lay danh sach khong thanh cong!');
        }
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Theo dõi</h1>
            <DivFlexRow style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <DivFlexRow style={{ alignItems: 'center' }}>
                    <label style={{ marginLeft: 10 }}>Ngày bắt đầu: </label>
                    <Input type="date" {...start}/>
                    <label style={{ marginLeft: 10 }}>Ngày kết thúc: </label>
                    <Input type="date" {...end}/>
                </DivFlexRow>
                <Button onClick={fetchData}>
                    Lấy danh  sách
                </Button>
            </DivFlexRow>
            <Table style={{ marginTop: 15 }}>
                <tbody>
                    <tr>
                       {
                           nv.length > 0 && <th>Ngay</th>
                       }
                       {
                        nv.map((e, i) => <th key={i}>{e}</th>)
                       }
                    </tr>
                    {
                        data.map((e, index) => (
                            <tr key={index}>
                                <td>{e.ngay}</td>
                                {
                                    e.data.map((el, i) => <td key={i}>{el.tiencong + el.vsbd + el.vskp}</td>)
                                }
                            </tr>
                        ))
                    }
                    <tr>
                        {nv.length > 0 && <td>Tổng tiền</td>}
                        {
                            nv.map((e, i) => <td key={i}>{sum[e]}</td>)
                        }
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}