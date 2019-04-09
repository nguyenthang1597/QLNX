import React, { } from 'react';
import {Modal, ModalContent, DivFlexRow, DivFlexColumn, Input, Button, DelButton} from '../../../styles'
import lib from '../../../lib'
import { AddDauNhot } from '../../../API/DauNhotAPI'
import { connect } from 'react-redux'

const PopupDauNhot = (props) => {
    let mMaPhuTung = lib.handleInput("");
    let mNameEng = lib.handleInput("");
    let mNameVie = lib.handleInput("");
    let mGiaBanHead = lib.handleInput(0);
    let mGiaBanLe =lib.handleInput(0);
    let mViTri = lib.handleInput("");
    let mNote = lib.handleInput("");
    let mSoLuongTonKho = lib.handleInput(0);

    const handleAdd = () => {

        let _gia_head = parseInt(mGiaBanHead.value)
        let _gia_le = parseInt(mGiaBanLe.value)

        let _soluong = parseInt(mSoLuongTonKho.value)

        let data = {
            maphutung: mMaPhuTung.value,
            tentienganh: mNameEng.value,
            tentiengviet: mNameVie.value,
            loaiphutung: "dầu nhớt",
            giaban_head: _gia_head,
            giaban_le: _gia_le,
            vitri: mViTri.value,
            soluongtonkho: _soluong,
            ghichu:mNote.value,
        }

        AddDauNhot(props.token, data).then(res => {
            alert("Thêm thành công.");
            props.getList();
            // props.onCloseClick()
        }).catch(err => {
                alert("Lỗi thêm phụ tùng")
        })
    }


    return (
        <Modal className={props.isShowing ? "active" : ""}>
            <ModalContent>
            <h2 style={{ textAlign: 'center' }}>Dầu nhớt</h2>
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
                        <label>Giá bán (head) </label>
                        <Input type="number" min={0} {...mGiaBanHead}/>
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Giá bán lẻ</label>
                        <Input type="number" min={0} {...mGiaBanLe}/>
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Vị Trí</label>
                        <Input  {...mViTri}/>
                    </DivFlexColumn>
                    
                </DivFlexRow>
               
                <DivFlexRow >
                    <DivFlexColumn style={{flex: 1}}>
                        <label>Số lượng tồn kho </label>
                        <Input type="number" min={0} {...mSoLuongTonKho}/>
                    </DivFlexColumn>
                    
                    <DivFlexColumn style={{flex: 1, marginLeft: 15}}>
                        <label>Ghi chú</label>
                        <Input  {...mNote}/>
                    </DivFlexColumn>
                    
                </DivFlexRow>

                <DivFlexRow style={{justifyContent: 'flex-end', marginTop: 15}}>
                    <Button onClick={handleAdd}>Lưu</Button>
                    <DelButton onClick={() => props.onCloseClick()} style={{marginLeft: 15}}>Hủy bỏ</DelButton>
                </DivFlexRow>

            </ModalContent>
        </Modal>
    );
}
const mapState = (state) => ({
    token: state.Authenticate.token,
})



export default connect(mapState, null)(PopupDauNhot);
// export default PopupDauNhot;