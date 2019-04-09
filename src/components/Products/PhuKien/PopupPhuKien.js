import React, { useEffect } from 'react';
import {Modal, ModalContent, DivFlexRow, DivFlexColumn, Input, Button, DelButton} from '../../../styles'
import lib from '../../../lib'
import { AddPhuKien} from '../../../API/PhuKiemAPI'

const PopupPhuKien = (props) => {

    let mMaPhuTung = lib.handleInput("");
    let mNameEng = lib.handleInput("");
    let mNameVie = lib.handleInput("");
    let mGiaBanHead = lib.handleInput(0);
    let mGiaBanLe =lib.handleInput(0);
    let mViTri = lib.handleInput("");
    let mSoLuongTonKho = lib.handleInput(0);
    let mLoaiXe = lib.handleInput("");
    let mNote = lib.handleInput("");

    const handleAdd = () => {

        if(mMaPhuTung.value === "" || mNameEng.value ==="" || mNameVie.value === "" || mGiaBanHead.value === 0 || 
         mGiaBanLe.value === 0 || mSoLuongTonKho.value === 0 || mLoaiXe.value === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        let _gia_head = mGiaBanHead.value
        let _gia_le = mGiaBanLe.value
        let _soluong = mSoLuongTonKho.value

        let data = {
            maphutung: mMaPhuTung.value,
            tentienganh: mNameEng.value,
            tentiengviet: mNameVie.value,
            loaiphutung: "phụ kiện",
            giaban_head: _gia_head,
            giaban_le: _gia_le,
            vitri: mViTri.value,
            soluongtonkho: _soluong,
            loaixe: mLoaiXe.value,
            ghichu:mNote.value,
        }

        AddPhuKien(props.token, data).then(res => {
            alert("Thêm thành công.");
            props.getList();
            clearData();
        })
            .catch(err => {
                console.log(err);
                alert("Lỗi thêm phụ tùng")
        })
    }

    const clearData = () => {
        mMaPhuTung.setValue("");
        mNameEng.setValue("");
        mNameVie.setValue("");
        mGiaBanHead.setValue(0);
        mGiaBanLe.setValue(0);
        mSoLuongTonKho.setValue(0);
        mLoaiXe.setValue("");
    }

    useEffect(() => {
        if(props.isShowing) {
            clearData();
        }
    },[props.isShowing])

    return (
        <Modal className={props.isShowing ? "active" : ""}>
            <ModalContent>
            <h2 style={{ textAlign: 'center' }}>Phụ kiện</h2>
                <DivFlexRow >
                <DivFlexColumn style={{ flex: 1 }}>
                        <label>Mã phụ tùng </label>
                        <Input {...mMaPhuTung} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Tên phụ tùng (Anh) </label>
                        <Input {...mNameEng}/>
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Tên phụ tùng (Việt)</label>
                        <Input {...mNameVie}/>
                    </DivFlexColumn>
                </DivFlexRow>

                <DivFlexRow >
                    <DivFlexColumn style={{flex: 1}}>
                        <label>Giá bán head(đã có VAT) </label>
                        <Input type="number" min={0} {...mGiaBanHead}/>
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Giá bán lẻ(đã có VAT)</label>
                        <Input type="number" min={0} {...mGiaBanLe}/>
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Vị trí</label>
                        <Input {...mViTri}/>
                    </DivFlexColumn>
                </DivFlexRow>
               
                <DivFlexRow >
                    <DivFlexColumn style={{flex: 1}}>
                        <label>Số lượng tồn kho </label>
                        <Input type="number" min={0} {...mSoLuongTonKho}/>
                    </DivFlexColumn>
                    
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Loại xe</label>
                        <Input {...mLoaiXe}/>
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Ghi chú</label>
                        <Input {...mNote}/>
                    </DivFlexColumn>
                </DivFlexRow>

                <DivFlexRow style={{justifyContent: 'flex-end'}}>
                    <Button onClick={handleAdd}>Lưu</Button>
                    <DelButton onClick={() => props.onCloseClick()} style={{marginLeft: 15}}>Hủy bỏ</DelButton>
                </DivFlexRow>

            </ModalContent>
        </Modal>
    );
}

export default PopupPhuKien;