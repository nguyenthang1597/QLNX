import React, {} from 'react';
import { Modal, ModalContent, DivFlexRow, DivFlexColumn, Input, Button, DelButton } from '../../../styles'
import lib from '../../../lib'
import { AddPhuTung } from '../../../API/PhuTungAPI'

const PopupPhuTung = (props) => {

    let mMaPhuTung = lib.handleInput("");
    let mNameEng = lib.handleInput("");
    let mNameVie = lib.handleInput("");
    let mGiaBanHead = lib.handleInput(0);
    let mGiaBanLe = lib.handleInput(0);
    let mViTri = lib.handleInput("");
    let mSoLuongTonKho = lib.handleInput(0);
    let mModel = lib.handleInput("");
    let mNote = lib.handleInput("");
    let mColor = lib.handleInput("#FFFFFF");


    const handleAdd = () => {

        let _gia_head = parseInt(mGiaBanHead.value)
        let _gia_le = parseInt(mGiaBanLe.value)
        let _soluong = parseInt(mSoLuongTonKho.value)


        let data = {
            maphutung: mMaPhuTung.value,
            tentienganh: mNameEng.value,
            tentiengviet: mNameVie.value,
            loaiphutung: "phụ tùng",
            giaban_head: _gia_head,
            giaban_le: _gia_le,
            soluongtonkho: _soluong,
            ghichu:mNote.value,
            vitri: mViTri.value,
            model: mModel.value,
            mamau: mColor.value,

        }

        AddPhuTung(props.token, data).then(res => {
            alert("Thêm thành công.");
            props.getList();
        })
            .catch(err => {
                console.log(err);
                alert("Lỗi thêm phụ tùng")
        })
    }

    return (
        <Modal className={props.isShowing ? "active" : ""}>
            <ModalContent>
                <h2 style={{ textAlign: 'center' }}>Phụ tùng</h2>
                <DivFlexRow >
                    <DivFlexColumn style={{ flex: 1 }}>
                        <label>Mã phụ tùng </label>
                        <Input {...mMaPhuTung} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ flex: 1 , marginLeft: 15 }}>
                        <label>Tên phụ tùng (Anh) </label>
                        <Input {...mNameEng} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ flex: 1, marginLeft: 15 }}>
                        <label>Tên phụ tùng (Việt)</label>
                        <Input {...mNameVie} />
                    </DivFlexColumn>
                </DivFlexRow>

                <DivFlexRow >
                    <DivFlexColumn style={{ flex: 1 }}>
                        <label>Giá bán head(đã có VAT) </label>
                        <Input type="number" min={0} {...mGiaBanHead} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ flex: 1, marginLeft: 15 }}>
                        <label>Giá bán lẻ(đã có VAT)</label>
                        <Input type="number" min={0} {...mGiaBanLe} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ flex: 1, marginLeft: 15 }}>
                        <label>Vị trí</label>
                        <Input  {...mViTri} />
                    </DivFlexColumn>
                </DivFlexRow>


                <DivFlexRow >
                    <DivFlexColumn style={{ flex: 1 }}>
                        <label>Số lượng tồn kho </label>
                        <Input type="number" min={0} {...mSoLuongTonKho} />
                    </DivFlexColumn>

                    <DivFlexColumn style={{ flex: 1, marginLeft: 15 }}>
                        <label>Model</label>
                        <Input {...mModel} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ flex: 1, marginLeft: 15 }}>
                        <label>Ghi chú</label>
                        <Input {...mNote} />
                    </DivFlexColumn>
                </DivFlexRow>
                <DivFlexColumn >
                    <label>Màu</label>
                    <Input type="color" width={"45px"} {...mColor} />
                </DivFlexColumn>

                <DivFlexRow style={{ justifyContent: 'flex-end' }}>
                    <Button onClick={handleAdd}>Lưu</Button>
                    <DelButton onClick={() => props.onCloseClick()} style={{ marginLeft: 15 }}>Hủy bỏ</DelButton>
                </DivFlexRow>

            </ModalContent>
        </Modal>
    );
}

export default PopupPhuTung;