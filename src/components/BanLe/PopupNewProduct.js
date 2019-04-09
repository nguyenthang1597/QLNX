import React, {useState, useEffect} from 'react'
import {Modal, ModalContent, DivFlexColumn, Input, DivFlexRow, Button, DelButton} from '../../styles'
import lib from '../../lib'
import {connect} from 'react-redux'
import {getAllProduct} from '../../actions/Product';

const PopupNewProduct = (props) => {

    let mTenCongViec = lib.handleInput("");
    let [mMaPhuTung, setMaPhuTung] = useState("");
    let mDonGia = lib.handleInput(0);
    let mSoLuong = lib.handleInput(1);
    let mTonKho = lib.handleInput(1);
    let mTienCong = lib.handleInput(0);
    let [mDataList, setDataList] = useState([]);

    const searchMaPhuTung = (values) => {
        setMaPhuTung(values);
        let product = props.listProduct.find(function (item) {
            return item.maphutung === values;
        });
        if (product !== undefined) {
            mTenCongViec.setValue(product.tentiengviet);
            mDonGia.setValue(product.giaban_le);
            mTonKho.setValue(product.soluongtonkho);
        }
    };

    const handleAdd = () => {
        if (mTenCongViec.value === "" || mMaPhuTung.value === "" || mDonGia.value === 0 || mSoLuong.value === 0) {
            alert("Chưa nhập dữ liệu đầy đủ.");
        } else {
            let newData = {
                tencongviec: mTenCongViec.value,
                maphutung: mMaPhuTung,
                dongia: mDonGia.value,
                soluong: mSoLuong.value,
                tongtien: mDonGia.value * mSoLuong.value,
            };
            props.addItemToProduct(newData);
            props.onCloseClick();
        }
    };

    useEffect(() => {
        if (props.isShowing) {
            props.getAllProduct(props.token);
            setMaPhuTung("");
            mTenCongViec.setValue("");
            mDonGia.setValue(0);
            mSoLuong.setValue(1);
        }
    }, [props.isShowing]);

    //
    // useEffect(() => {
    //     if(props.isShowing && props.listProduct) {
    //         SliceTop20(props.listProduct);
    //     }
    // },[props.isShowing, props.listProduct]);
    //
    // const SliceTop20 = (list) => {
    //     setDataList(list.slice(0,20));
    // };

    return (
        <Modal className={props.isShowing ? "active" : ""}>
            <ModalContent>
                <h2 style={{textAlign: 'center'}}></h2>
                <DivFlexRow>
                    <DivFlexColumn style={{flex: 1}}>
                        <label>Tên phụ tùng </label>
                        <Input readOnly {...mTenCongViec} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Mã phụ tùng: </label>
                        <Input list="browsers" name="browser" value={mMaPhuTung} onChange={(e) => {
                            mDonGia.setValue("");
                            mTenCongViec.setValue("");
                            mTonKho.setValue(1);
                            mSoLuong.setValue(1);
                            searchMaPhuTung(e.target.value);
                        }}/>
                        <datalist id="browsers">
                            {props.listProduct && props.listProduct.map((item, index) => (
                                     <option disabled={item.soluongtonkho === 0} key={index}
                                                   value={item.maphutung}>{item.tentiengviet} ({item.soluongtonkho})</option>
                            ))}
                        </datalist>

                    </DivFlexColumn>
                </DivFlexRow>

                <DivFlexRow>
                    <DivFlexColumn style={{flex: 1}}>
                        <label>Đơn giá: </label>
                        <Input readOnly {...mDonGia} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Số lượng: </label>
                        <Input type="Number" max={mTonKho.value} min={1} {...mSoLuong} />
                    </DivFlexColumn>
                </DivFlexRow>

                <DivFlexRow style={{marginTop: 10, fontSize: 20, justifyContent: 'flex-end'}}>
                    <label>Tổng tiền: <span
                        style={{fontWeight: 'bold'}}>{(parseInt(mDonGia.value) || 0) * (parseInt(mSoLuong.value) || 0) + (parseInt(mTienCong.value) || 0)} VND</span></label>
                </DivFlexRow>

                <DivFlexRow style={{marginTop: 10, fontSize: 20, justifyContent: 'flex-end'}}>
                    <Button onClick={handleAdd}>Thêm</Button>
                    <DelButton style={{marginLeft: 10}} onClick={() => props.onCloseClick()}>Hủy</DelButton>
                </DivFlexRow>

            </ModalContent>
        </Modal>
    )
};

const mapState = (state) => ({
    token: state.Authenticate.token,
    listProduct: state.Product.listProduct,
});

const mapDispatch = (dispatch) => ({
    getAllProduct: (token) => {
        dispatch(getAllProduct(token))
    },
});

export default connect(mapState, mapDispatch)(PopupNewProduct);