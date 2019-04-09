import React, {useEffect } from 'react';
import {Modal, ModalContent, DivFlexRow, DivFlexColumn, Input, Button, DelButton} from '../../../styles'
import lib from '../../../lib'
import { AddNonBaoHiem,UpdateNonBaoHiem } from '../../../API/NonBaoHiemAPI'
import { connect } from 'react-redux'

const PopupNonBH = (props) => {
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
            loaiphutung: "mũ bảo hiểm",
            giaban_head: _gia_head,
            giaban_le: _gia_le,
            vitri: mViTri.value,
            soluongtonkho: _soluong,
            ghichu:mNote.value,
        }

        if (props.itemEdit){
            UpdateNonBaoHiem(props.token, data,props.itemEdit.maphutung).then(res => {
                alert("Update thành công")
                props.onCloseClick();
            }).catch(err => {
                alert("Lỗi khi update")
                console.log(err.response.data)
                props.onCloseClick();
            })
        }else{
            AddNonBaoHiem(props.token, data).then(res => {
                alert("Thêm thành công.");
                props.onCloseClick()
            }).catch(err => {
                alert("Lỗi thêm phụ tùng")
            })
        }

    }

    useEffect(() => {
        if (props.itemEdit){
            console.log(props.itemEdit)
            mMaPhuTung.setValue(props.itemEdit.maphutung)
            mNameEng.setValue(props.itemEdit.tentienganh)
            mNameVie.setValue(props.itemEdit.tentiengviet)
            mGiaBanHead.setValue(props.itemEdit.giaban_head)
            mGiaBanLe.setValue(props.itemEdit.giaban_le)
            mViTri.setValue(props.itemEdit.vitri)
            mNote.setValue(props.itemEdit.ghichu)
            mSoLuongTonKho.setValue(props.itemEdit.soluongtonkho)
        }else{
            mMaPhuTung.setValue("")
            mNameEng.setValue("")
            mNameVie.setValue("")
            mGiaBanHead.setValue("")
            mGiaBanLe.setValue("")
            mViTri.setValue("")
            mNote.setValue("")
            mSoLuongTonKho.setValue("")
        }

    }, [props.itemEdit])

    return (
        <Modal className={props.isShowing ? "active" : ""}>
            <ModalContent>
            <h2 style={{ textAlign: 'center' }}>Nón bảo hiểm</h2>
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
                        <label>Vị trí</label>
                        <Input {...mViTri}/>
                    </DivFlexColumn>
                    
                </DivFlexRow>
               
                <DivFlexRow >
                    <DivFlexColumn style={{flex: 1}}>
                        <label>Số lượng tồn kho </label>
                        <Input type="number" min={0} {...mSoLuongTonKho}/>
                    </DivFlexColumn>
                    <DivFlexColumn style={{flex: 1,marginLeft: 15}}>
                        <label>Ghi chú </label>
                        <Input {...mNote}/>
                    </DivFlexColumn>
                    

                    
                </DivFlexRow>

                <DivFlexRow style={{justifyContent: 'flex-end', marginTop: 15}}>
                    <Button  onClick={handleAdd}>Lưu</Button>
                    <DelButton onClick={() => props.onCloseClick()} style={{marginLeft: 15}}>Hủy bỏ</DelButton>
                </DivFlexRow>

            </ModalContent>
        </Modal>
    );
}
const mapState = (state) => ({
    token: state.Authenticate.token,
})



export default connect(mapState, null)(PopupNonBH);
