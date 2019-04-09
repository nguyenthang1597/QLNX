import React, { useState, useEffect } from 'react'
import { Modal, ModalContent, DivFlexColumn, Input, DivFlexRow, Button, DelButton } from '../../styles'
import lib from '../../lib'
import { GetListSalary } from '../../API/Salary'
import { connect } from 'react-redux'
import { getAllProduct,addBillProduct } from '../../actions/Product';

const PopupAccessory = (props) => {

    let mTenCongViec = lib.handleInput("");
    let [mMaPhuTung, setMaPhuTung] = useState("");
    let mDonGia = lib.handleInput("");
    let mSoLuong = lib.handleInput(0);
    let mTonKho=lib.handleInput(0);
    let mTienCong = lib.handleInput(0);
    let [listPhuTung, setListPhuTung] = useState([]);
    let [listGiaDichVu, setListGiaDichVu] = useState([]);

    const searchMaPhuTung = (values) => {
        setListPhuTung(props.listProduct.filter(function (Product) {
            return ((Product.maphutung.indexOf(values)) !== -1 && Product.soluongtonkho>0);
        }))
        setMaPhuTung(values);
        let product=listPhuTung.find(function(item){
            return item.maphutung===values;
        })
        if (product!==undefined){
            mTenCongViec.setValue(product.tentiengviet);
            mDonGia.setValue(product.giaban_le);
            mTonKho.setValue(product.soluongtonkho);
        }
    }
   
    const handleAdd = () => {
        if (mTenCongViec.value===""){
            alert("Tên Phụ Tùng/Công Việc Không Được Để Trống!")
            return;
        }
        if (mMaPhuTung!=="" && parseInt(mSoLuong.value)===0){
            alert("Mời Chọn Số Lượng!")
            return;
        }
        var data={
            key:props.listBillProduct.length+1,
            tenphutungvacongviec:mTenCongViec.value,
            maphutung:mMaPhuTung,
            dongia:parseInt(mDonGia.value)||0,
            soluongphutung:parseInt(mSoLuong.value)||0,
            tiencong:parseInt(mTienCong.value)||0,
            tongtien:(parseInt(mDonGia.value) || 0)*(parseInt(mSoLuong.value)||0)+(parseInt(mTienCong.value)||0)
        }
        props.addBillProduct(data);
        mTenCongViec.setValue("");
        setMaPhuTung("");
        mDonGia.setValue("");
        mSoLuong.setValue("");
        mTienCong.setValue("");
        mTonKho.setValue("");
        mDonGia.setValue("");
        props.onCloseClick()
    }
    useEffect(() => {
        props.getAllProduct(props.token);
        GetListSalary(props.token).then(respose=>{
            setListGiaDichVu(respose.data);
        })
    }, []);
    return (
        <Modal className={props.isShowing ? "active" : ""}>
            <ModalContent>
                <h2 style={{ textAlign: 'center' }}>Bảng giá (STT: {props.STT})</h2>
                <DivFlexRow >
                    <DivFlexColumn style={{ flex: 1 }}>
                        <label>Tên phụ tùng và công việc: </label>
                        <Input {...mTenCongViec} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ flex: 1, marginLeft: 15 }}>
                        <label>Mã phụ tùng: </label>
                        <Input list="browsers" name="browser" value={mMaPhuTung} onChange={(e) => {
                            mDonGia.setValue("");
                            mTenCongViec.setValue("");
                            mTonKho.setValue(0);
                            mSoLuong.setValue(0);
                            searchMaPhuTung(e.target.value);
                        }} />
                        <datalist id="browsers">
                            {listPhuTung.map((item, index) => (
                                <option key={index} value={item.maphutung} >{item.tentiengviet}</option>
                            ))}
                        </datalist>
                    </DivFlexColumn>
                </DivFlexRow>

                <DivFlexRow >
                    <DivFlexColumn style={{ flex: 1 }}>
                        <label>Đơn giá: </label>
                        <Input readOnly {...mDonGia} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ flex: 1, marginLeft: 15 }}>
                        <label>Số lượng: </label>
                        <Input type="Number" max={mTonKho.value} min={0} {...mSoLuong} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ flex: 1, marginLeft: 15 }}>
                        <label>Tiền công: </label>
                        <Input list="tien_cong" name="tien_cong" type="number" {...mTienCong} />
                        <datalist id="tien_cong">
                        {listGiaDichVu.map((item, index) => (
                                <option key={index} value={item.tien} >{item.ten}</option>
                            ))}
                        </datalist>
                    </DivFlexColumn>
                </DivFlexRow>

                <DivFlexRow style={{ marginTop: 10, fontSize: 20, justifyContent: 'flex-end' }}>
                    <label>Tổng tiền: <span style={{ fontWeight: 'bold' }}>{(parseInt(mDonGia.value)||0)*(parseInt(mSoLuong.value)||0)+(parseInt(mTienCong.value)||0)} VND</span></label>
                </DivFlexRow>

                <DivFlexRow style={{ marginTop: 10, fontSize: 20, justifyContent: 'flex-end' }}>
                    <Button onClick={handleAdd}>Thêm</Button>
                    <DelButton style={{ marginLeft: 10 }} onClick={() => props.onCloseClick()}>Hủy</DelButton>
                </DivFlexRow>

            </ModalContent>
        </Modal>
    )
}
const mapState = (state) => ({
    token: state.Authenticate.token,
    listProduct: state.Product.listProduct,
    listBillProduct:state.Product.listBillProduct
})
const mapDispatch = (dispatch) => ({
    getAllProduct: (token) => { dispatch(getAllProduct(token)) },
    addBillProduct: (data) => { dispatch(addBillProduct(data)) },
})

export default connect(mapState, mapDispatch)(PopupAccessory);
