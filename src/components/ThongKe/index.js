import React, { useState } from 'react';
import { DivFlexRow, Button, Input, Table } from '../../styles'
import moment from 'moment'
import { GetBillTheoNgay } from "../../API/ThongKeAPI"
import ChiTietThongKe from './ChiTietThongKe'
import {GetListStaff} from '../../API/Staffs'
import {connect} from 'react-redux'

const ThongKe = (props) => {

    let [dateStart, setDateStart] = useState(moment().format("YYYY-MM-DD"));
    let [dateEnd, setDateEnd] = useState(moment().format("YYYY-MM-DD"));
    let [mBills, setBills] = useState([]);
    let [isShowing, setShowing] = useState(false);
    let [mMaHoaDon, setMaHoaDon] = useState("");
    let [loaihoadon, setLoaiHoaDon] = useState(-1);
    let [isLoading, setLoading] = useState(false);
    let [listStaff, setListStaff] = useState([]);

    const CallApiGetListStaff = () => {
        GetListStaff(props.token).then(res => {
            setListStaff(res.data);
        })
        .catch(err => {
            alert("Không lấy được danh sách nhân viên");
        })
    }

    const handleLayDanhSach = () => {
        setLoading(true)
        let start = moment(dateStart).utc().format("YYYY/MM/DD");
        let end = moment(dateEnd).utc().format("YYYY/MM/DD");
        GetBillTheoNgay(props.token, start, end).then(res => {
            setBills(res.data);
            CallApiGetListStaff();
        })
            .catch(err => {
                alert("Lỗi: ");
            }).finally(() => {
                setLoading(false);
            })
    }

    return (
        <div>
            <DivFlexRow style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <DivFlexRow style={{ alignItems: 'center' }}>
                    <h3>Danh sách bill.</h3>
                    <label style={{ marginLeft: 10 }}>Bắt đầu từ </label>
                    <Input type="date" value={dateStart} style={{ marginLeft: 10 }} onChange={(e) => setDateStart(e.target.value)} />
                    <label style={{ marginLeft: 10 }}>Kết thúc</label>
                    <Input type="date" value={dateEnd} style={{ marginLeft: 10 }} onChange={(e) => setDateEnd(e.target.value)} />
                </DivFlexRow>
                <Button onClick={isLoading ? ()=> {} : handleLayDanhSach}>
                    {isLoading ? <i className="fas fa-spinner fa-pulse"></i> : "Lấy danh sách" }
                </Button>
            </DivFlexRow>
            <Table style={{ marginTop: 15 }}>
                <tbody>
                    <tr>
                        <th>Mã hóa đơn</th>
                        <th>Tổng tiền</th>
                        <th>Ngày thanh toán</th>
                        <th>Loại hóa đơn</th>
                        <th><i className="fas fa-info"></i></th>
                    </tr>

                    {
                        mBills && mBills.map((item, index) => (
                            <tr key={index}>
                                <td>{item.mahoadon}</td>
                                <td>{item.tongtien}</td>
                                <td>{moment(item.ngaythanhtoan).format("hh:mm DD/MM/YYYY")}</td>
                                <td>{item.loaihoadon === 0 ? "Sửa chữa" : "Bán lẻ"}</td>
                                <td>
                                    <Button onClick={() => {
                                        setMaHoaDon(item.mahoadon)
                                        setShowing(true);
                                        setLoaiHoaDon(item.loaihoadon);
                                    }}>Chi tiết</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <ChiTietThongKe
                isShowing={isShowing}
                onCloseClick={ () => setShowing(false)}
                mahoadon={mMaHoaDon}
                token={props.token}
                loaihoadon={loaihoadon}
                listStaff={listStaff}
            />
        </div>
    );
}

const mapState = (state) => ({
    token: state.Authenticate.token,
})

export default connect(mapState)(ThongKe);