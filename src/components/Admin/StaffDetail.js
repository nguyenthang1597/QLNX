import React, { useState } from 'react'
import { Modal, ModalContent, CloseButton, DivFlexRow, Button, DivFlexColumn, Input,Select } from '../../styles'
// import { showNoti } from '../../../Actions/Notification';
 import {AddStaff} from '../../API/Staffs'
 import { connect } from 'react-redux'

const StaffDetail = (props) => {

    let [isUpload, setUpload] = useState(false);
    let [mStaffName,setStaffName] = useState("");
    let [mCMND,setCMND] = useState("");
    let [mSDT,setSDT] = useState("");
    let [mEmail,setEmail] = useState("");
    let [mUserName,setUserName] = useState("");
    let [mPassword,setPassword] = useState("");
    let [mRole,setRole] = useState("Dịch Vụ");    

    const handleButtonSave = () => {
        var data={
            ten:mStaffName,
            cmnd:mCMND,
            sdt:mSDT,
            gmail:mEmail,
            taikhoan:mUserName,
            username:mUserName,
            password:mPassword,
            chucvu:mRole
        }
        setUpload(true);
        AddStaff(props.token,data).then(Response=>{
            setUpload(false);
            props.onCloseClick();
        }).catch(err=>{
            console.log(err.response.data);
        });
    };


    return (
        <Modal className={props.isShowing ? "active" : ""}>
            <ModalContent>
                <div style={{ paddingTop: 3, paddingBottom: 3 }}>
                    <CloseButton onClick={props.onCloseClick}>&times;</CloseButton>
                    <h2> </h2>
                </div>
                <DivFlexRow style={{ marginTop: 10 }}>
                    <DivFlexColumn style={{ marginLeft: 25, width: '100%' }}>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 2 }}>
                            Tên Nhân Viên
                                <Input width='auto' value={mStaffName.value} onChange={(e) => setStaffName(e.target.value)} />
                        </DivFlexColumn>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 2 }}>
                            Số CMND
                                <Input width='auto' type="Number" value={mCMND.value} onChange={(e) => setCMND(e.target.value)} />
                        </DivFlexColumn>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 5 }}>
                            Số Điên Thoại
                                <Input width='auto' type="Number" value={mSDT.value} onChange={(e) => setSDT(e.target.value)} />
                        </DivFlexColumn>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 2 }}>
                            Email
                                <Input type="Email" width='auto' value={mEmail.value} onChange={(e) => setEmail(e.target.value)} />
                        </DivFlexColumn>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 2 }}>
                            Tên Đăng Nhập
                                <Input width='auto' value={mUserName.value} onChange={(e) => setUserName(e.target.value)} />
                        </DivFlexColumn>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 2 }}>
                            Mật Khẩu
                                <Input width='auto' type="Password" value={mPassword.value} onChange={(e) => setPassword(e.target.value)} />
                        </DivFlexColumn>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 2 }}>
                            Chức Vụ
                            <Select onChange={(e) => setRole(e.target.value)}>
                                <option value="Dịch Vụ">Dịch Vụ</option>
                                <option value="Phụ Kiện">Phụ Kiện</option>
                                <option value="Sửa Chữa">Sửa Chữa</option>
                            </Select>
                        </DivFlexColumn>
                    </DivFlexColumn>
                </DivFlexRow>
                <DivFlexRow style={{ justifyContent: 'flex-end' }}>
                    <Button width='100px'onClick={() => handleButtonSave()}>
                        {isUpload ? <i className="fas fa-spinner fa-spin"></i> : "Lưu"}
                    </Button>
                </DivFlexRow>
            </ModalContent>
        </Modal>
    )
}

const mapState = (state) => ({
    token: state.Authenticate.token,
})

// const mapDispatch = dispatch => ({
//     showNoti: (type, mess) => { dispatch(showNoti(type, mess)) }
// })

export default connect(mapState, null)(StaffDetail);