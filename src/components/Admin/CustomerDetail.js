import React, { useState } from 'react'
import { Modal, ModalContent, CloseButton, DivFlexRow, Button, DivFlexColumn, Input } from '../../styles'
// import { showNoti } from '../../../Actions/Notification';
 import {AddCustomer} from '../../API/Customer'
 import { connect } from 'react-redux'



const CustomerDetail = (props) => {

    let [isUpload, setUpload] = useState(false);
    let [mCustomerName,setCustomerName] = useState("");
    let [mSDT,setSDT] = useState("");
    let [mAddress,setAddress] = useState("");
    let [mSoXe,setSoXe] = useState("");
    

    const handleButtonSave = () => {
        var data={
            ten:mCustomerName,
            sodienthoai:mSDT,
            diachi:mAddress,
            biensoxe:mSoXe
        }
        setUpload(true);
        AddCustomer(props.token,data).then(Response=>{
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
                            Tên Khách Hàng
                                <Input width='auto' value={mCustomerName.value} onChange={(e) => setCustomerName(e.target.value)} />
                        </DivFlexColumn>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 2 }}>
                            Số Điện Thoại
                                <Input width='auto' type="Number" value={mSDT.value} onChange={(e) => setSDT(e.target.value)} />
                        </DivFlexColumn>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 5 }}>
                            Địa Chỉ
                                <Input width='auto'  value={mAddress.value} onChange={(e) => setAddress(e.target.value)} />
                        </DivFlexColumn>
                        <DivFlexColumn style={{ fontSize: 20, marginBottom: 2 }}>
                            Biển Số Xe
                                <Input type="Email" width='auto' value={mSoXe.value} onChange={(e) => setSoXe(e.target.value)} />
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

export default connect(mapState, null)(CustomerDetail);