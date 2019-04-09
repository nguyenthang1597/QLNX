import React, { useState, useEffect } from 'react'
import { DivFlexRow, DivFlexColumn, Button, Input, Table, DelButton } from '../../styles'
import PopupAccessory from './PopupAccessory'
import lib from '../../lib'
import { connect } from 'react-redux'
import { SaveBill, ThanhToan, HuyThanhToan, GetBillSuaChuaByMaHoaDon } from '../../API/Bill'
import { GetlistCustomer } from '../../API/Customer'
import { GetListNVSuaChua } from '../../API/Staffs'
import { deleteBillProduct, deleteItemBillProduct, setListBillProduct } from '../../actions/Product';
import { withRouter } from 'react-router-dom'

const RepairedBill = (props) => {

    let mCustomerName = lib.handleInput("");
    let mPhone = lib.handleInput("");
    let mAddress = lib.handleInput("");
    let mMaKH = lib.handleInput("");
    let mMaNVSuaChua = lib.handleInput("");
    let [biensoxe, setBienSoXe] = useState("");
    let [isShowNewBill, setShowNewBill] = useState(false);
    let [listBienSo, setListBienSo] = useState([]);
    let [listNhanVienSuaChua, setListNhanVienSuaChua] = useState([]);
    let [maban, setMaban] = useState(null);
    let [isUpdateBill, setUpdateBill] = useState(0);
    let [mMaHoaDon, setMaHoaDon] = useState("");
    let [manhanvien, setMaNhanVien] = useState(-1);

    useEffect(() => {
        GetlistCustomer(props.token).then(response => {
            setListBienSo(response.data);
        })
        GetListNVSuaChua(props.token).then(response => {
            setListNhanVienSuaChua(response.data);
        })
    }, [])

    useEffect(() => {
        let pathname = window.location.href;
        let tmp = pathname.substring(pathname.lastIndexOf('/') + 1, pathname.length);
        let mb = Number.parseInt(tmp) - 1;
        setMaban(mb + 1);

        props.socket.on("mahoadon", (data) => {

            if (pathname.indexOf("services/repairedbill") !== -1) {
                if (data && data.trangthai === 0) {
                    props.history.goBack();
                }

                if (data && data.trangthai && data.trangthai === 2) {
                    setUpdateBill(2);
                    setMaHoaDon(data.mahoadon);
                    showHoaDon(data.mahoadon);
                }
                else {
                    mCustomerName.setValue("");
                    mPhone.setValue("");
                    mAddress.setValue("");
                    props.deleteBillProduct();
                }
            }
        });

        // props.socket.on('lifttableBill', async data => {
        //         let val = await data;
        //         if(mb > -1) {
        //             if (val && val[mb].trangthai === 0) {
        //                 alert("Có người đã thu hồi bàn này");
        //                 props.history.goBack();
        //             }
        //         }
        // })
        props.socket.emit("maban", mb);
    }, [])

    const showHoaDon = (mahoadon) => {
        GetBillSuaChuaByMaHoaDon(props.token, mahoadon).then(res => {
            console.log(res);
            setBienSoXe(res.data.biensoxe);
            // mPhone.setValue(res.data.)
            mCustomerName.setValue(res.data.tenkh);
            props.setListBillProduct(res.data.chitiet);
            setMaNhanVien(res.data.manv);
        })
            .catch(err => {
                alert("Không lấy được hóa đơn.")
            })
    }


    const searchBienSoXe = (values) => {

        setBienSoXe(values);
        let customer = listBienSo.find(function (item) {
            return item.biensoxe === values;
        })
        if (customer !== undefined) {
            mCustomerName.setValue(customer.ten);
            mPhone.setValue(customer.sodienthoai);
            mAddress.setValue(customer.diachi);
            mMaKH.setValue(customer.ma);
        }
    }

    const searchNhanVienSuaChua = (values) => {
        console.log(values);
        console.log(listNhanVienSuaChua);
        let nv = listNhanVienSuaChua.find(i => i.ma === Number.parseInt(values))
        if (nv) {
            mMaNVSuaChua.setValue(values);
        }
    }

    const handleSaveBill = () => {
        var tong = 0;
        var listProduct = [];
        if (props.listBillProduct.length === 0) {
            alert("Phiếu Sửa Chữa Rỗng");
            return;
        }
        for (let i = 0; i < props.listBillProduct.length; i++) {
            tong = tong + props.listBillProduct[i].tongtien;
            let temp = {
                tenphutungvacongviec: props.listBillProduct[i].tenphutungvacongviec,
                maphutung: props.listBillProduct[i].maphutung,
                soluongphutung: props.listBillProduct[i].soluongphutung,
                tiencong: props.listBillProduct[i].tiencong,
                manvsuachua: mMaNVSuaChua.value,
                tongtien: props.listBillProduct[i].tongtien
            }
            listProduct.push(temp);
        }
        var data = {
            manvsuachua: mMaNVSuaChua.value,
            tenkh: mCustomerName.value,
            makh: mMaKH.value,
            tongtien: tong,
            biensoxe: biensoxe,
            chitiet: listProduct,
            manv: props.info.ma
        }
        console.log(data);
        SaveBill(props.token, data).then(Response => {
            console.log(data)
            props.deleteBillProduct();
            props.socket.emit("bill", { maban: maban - 1, mahoadon: Response.data.mahoadon });
            alert("Tạo Phiếu Sửa Chữa Thành Công - Mã Hóa Đơn:" + Response.data.mahoadon);
            props.history.goBack();
        }).catch(err => {
            alert(JSON.stringify(err.response.data))
        })

    }

    const thanhToanHoaDon = () => {
        ThanhToan(props.token, mMaHoaDon).then(res => {
            props.socket.emit("release", { maban: maban - 1, mahoadon: "" });
            setMaHoaDon("");
            props.history.goBack();
        })
            .catch(err => {
                alert("Lỗi thanh toán")
            })
    }
    console.log(mMaNVSuaChua.value)
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Phiếu sửa chữa (Bàn số: {maban})</h1>
            <DivFlexRow>
                <DivFlexColumn>
                    <label>Tên khách hàng: </label>
                    <Input autocomplete="off" {...mCustomerName} />
                </DivFlexColumn>
                <DivFlexColumn style={{ marginLeft: 20 }}>
                    <label>Số điện thoại: </label>
                    <Input autocomplete="off" {...mPhone} pattern="[0-9]{10}" />
                </DivFlexColumn>
                <DivFlexColumn style={{ marginLeft: 20 }}>
                    <label>Biển số xe: </label>
                    <Input list="bien_so" name="bien_so" value={biensoxe} onChange={(e) => {
                        searchBienSoXe(e.target.value);
                    }} />
                    <datalist id="bien_so">
                        {listBienSo.map((item, index) => (
                            <option key={index} value={item.biensoxe} >{item.ten}</option>
                        ))}
                    </datalist>
                </DivFlexColumn>
                <DivFlexColumn style={{ marginLeft: 20 }}>
                    <label>Mã nhân viên sửa chữa: </label>
                    <Input list="nv_suachua" name="nv_suachua" value={mMaNVSuaChua.value} onChange={(e) => {
                        searchNhanVienSuaChua(e.target.value);
                    }} />
                    <datalist id="nv_suachua">
                        {listNhanVienSuaChua.map((item, index) => (
                            <option key={index} value={item.ma}>{item.ten}</option>
                        ))}
                    </datalist>
                </DivFlexColumn>


            </DivFlexRow>
            <DivFlexColumn>
                <label>Địa chỉ: </label>
                <Input autocomplete="off" {...mAddress} />
            </DivFlexColumn>
            <DivFlexRow style={{ marginTop: 5, marginBottom: 5, justifyContent: 'space-between', alignItems: 'center' }}>
                <label>Bảng giá phụ tùng: </label>
                <Button onClick={() => setShowNewBill(true)}>
                    Thêm mới
                </Button>
            </DivFlexRow>
            <Table>
                <tbody>
                    <tr>
                        <th>STT</th>
                        <th>Tên phụ tùng <br /> và công việc</th>
                        <th>Mã phụ tùng</th>
                        <th>Đơn giá</th>
                        <th>SL</th>
                        <th>Tiền phụ tùng</th>
                        <th>Tiền công</th>
                        <th>Tổng tiền công <br />+ phụ tùng</th>
                        <th><i className="far fa-trash-alt"></i></th>
                    </tr>

                    {props.listBillProduct && props.listBillProduct.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.tenphutungvacongviec}</td>
                            <td>{item.maphutung}</td>
                            <td>{item.dongia}</td>
                            <td>{item.soluongphutung}</td>
                            <td>{item.dongia * item.soluongphutung}</td>
                            <td>{item.tiencong}</td>
                            <td>{item.tongtien}</td>
                            <td>
                                <DelButton onClick={() => {
                                    props.deleteItemBillProduct(item.key);
                                }}>
                                    <i className="far fa-trash-alt"></i>
                                </DelButton>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </Table>
            <DivFlexRow style={{ marginTop: 25, marginBottom: 5, justifyContent: 'space-between' }}>
                <label></label>
                {isUpdateBill === 0 ?
                    <Button onClick={() => { handleSaveBill(); }}>
                        Lưu
                    </Button>
                    :
                    <DivFlexRow>
                        <Button onClick={thanhToanHoaDon}>
                            Thanh toán
                        </Button>
                        <DelButton style={{ marginLeft: 15 }} onClick={() => { }}>
                            Hủy
                        </DelButton>
                    </DivFlexRow>
                }
            </DivFlexRow>
            <PopupAccessory isShowing={isShowNewBill} onCloseClick={() => { setShowNewBill(false) }} />
        </div>
    )
}
const mapState = (state) => ({
    token: state.Authenticate.token,
    listBillProduct: state.Product.listBillProduct,
    info: state.Authenticate.info
})
const mapDispatch = (dispatch) => ({
    deleteBillProduct: () => { dispatch(deleteBillProduct()) },
    deleteItemBillProduct: (key) => { dispatch(deleteItemBillProduct(key)) },
    setListBillProduct: (arr) => { dispatch(setListBillProduct(arr)) },

})
export default withRouter(connect(mapState, mapDispatch)(RepairedBill));
// export default RepairedBill;