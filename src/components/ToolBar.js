import React, { useState, useEffect } from 'react'
import { WraperToolBar, DivFlexRow } from '../styles'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ImgStaff from '../icon/staff.svg'
import ImgProduct from '../icon/product.svg'
import ImgRepairPrice from '../icon/repairPrice.svg'
import ImgLogout from '../icon/logout.svg'
import ImgServices from '../icon/services.svg'
import ImgBanLe from '../icon/banle.svg'
import ImgChamCong from '../icon/chamcong.svg'
import ImgThongKe from '../icon/thongke.svg'
import ImgBack from '../icon/back.svg'
import ImgCustomer from '../icon/customer.svg'
import { logout } from '../actions/Authenticate';
import {getAllProduct} from '../actions/Product'

const ToolBarItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid white;
    padding: 0px 10px;
    cursor: pointer;
    width: 85px;
    min-width: 85px;

    span {
        text-align: center;
        font-size: 14px;
        color: white;
        padding: 5px;
        
        &.active {
            text-decoration: underline;
        }
    }
`

const Icon = styled.img`
    width: 40px;
    height: 40px;
`

const CToolBarItem = (props) => {
    return (
        <ToolBarItem onClick={props.onClick}>
            <Icon alt="staff" src={props.img} />
            <span className={props.isActive ? "active" : ""}>{props.title}</span>
        </ToolBarItem>
    )
}

const ToolBar = (props) => {

    let [index, setIndex] = useState(0);
    var [mListToobarItem, setListToobarItem] = useState([]);
    useEffect(() => {
        if (props.info !== null) {
            if (props.info.chucvu === "Admin") {
                setListToobarItem([
                    {
                        index: 8,
                        title: "Back",
                        img: ImgBack,
                        onClick: (history) => {
                            let url = window.location.href;
                            if (url.indexOf("/repairedbill") !== -1) {
                                let maban = url.substring(url.lastIndexOf('/') + 1, url.length);
                                props.socket.emit('release', {
                                    maban: parseInt(maban) - 1,
                                    mahoadon: ""
                                })
                            }
                            history.goBack();
                        },
                    },
                    {
                        index: 0,
                        title: "Sản Phẩm",
                        img: ImgProduct,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/products') {
                                history.push("/products");
                            }
                            setIndex(0);
                            document.title = "Sản Phẩm";
                        },
                    },
                    {
                        index: 1,
                        title: "Nhân Viên",
                        img: ImgStaff,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/staffs')
                                history.push("/staffs");
                            setIndex(1);
                            document.title = "Nhân Viên";
                        },
                    },
                    {
                        index: 2,
                        title: "Tiền Công",
                        img: ImgRepairPrice,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/repairPrice')
                                history.push("/repairPrice");
                            setIndex(2);
                            document.title = "Tiền Công";
                        }
                    },
                    {
                        index: 3,
                        title: "Dịch vụ",
                        img: ImgServices,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/services') {
                                history.push("/services");
                            }
                            setIndex(3);
                            document.title = "Dịch vụ sửa chữa";
                        },
                    },
                    {
                        index: 4,
                        title: "Bán Lẻ",
                        img: ImgBanLe,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/banle') {
                                history.push("/banle");
                            }

                            setIndex(4);
                            document.title = "Hóa đơn bán lẻ";
                        },
                    },
                    {
                        index: 5,
                        title: "Khách Hàng",
                        img: ImgCustomer,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/customer') {
                                history.push("/customer");
                            }

                            setIndex(5);
                            document.title = "Khách Hàng";
                        },
                    },
                    {
                        index: 6,
                        title: "Chấm công",
                        img: ImgChamCong,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/chamcong') {
                                history.push("/chamcong");
                            }

                            setIndex(6);
                            document.title = "Chấm công nhân viên";
                        },
                    }, {
                        index: 7,
                        title: "Thống kê",
                        img: ImgThongKe,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/thongke') {
                                history.push("/thongke");
                            }

                            setIndex(7);
                            document.title = "Thống kê bill";
                        },
                    },
                ])
            } else if (props.info.chucvu === "Dịch Vụ") {
                setListToobarItem([
                    {
                        index: 3,
                        title: "Back",
                        img: ImgBack,
                        onClick: (history) => {
                            let url = window.location.href;
                            if (url.indexOf("/repairedbill") !== -1) {
                                let maban = url.substring(url.lastIndexOf('/') + 1, url.length);
                                props.socket.emit('release', {
                                    maban: parseInt(maban) - 1,
                                    mahoadon: ""
                                })
                            }
                            history.goBack();
                        },
                    },
                    {
                        index: 0,
                        title: "Sản Phẩm",
                        img: ImgProduct,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/products') {
                                history.push("/products");
                            }
                            setIndex(0);
                            document.title = "Sản Phẩm";
                        },
                    },
                    {
                        index: 1,
                        title: "Dịch vụ",
                        img: ImgServices,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/services') {
                                history.push("/services");
                            }
                            setIndex(1);
                            document.title = "Dịch vụ sửa chữa";
                        },
                    },
                    {
                        index: 2,
                        title: "Bán Lẻ",
                        img: ImgBanLe,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/banle') {
                                history.push("/banle");
                            }

                            setIndex(2);
                            document.title = "Hóa đơn bán lẻ";
                        },
                    },
                    {
                        index: 4,
                        title: "Thống kê",
                        img: ImgThongKe,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/thongke') {
                                history.push("/thongke");
                            }

                            setIndex(4);
                            document.title = "Thống kê bill";
                        },
                    },

                ])
            } else if (props.info.chucvu === "Phụ Kiện") {
                setListToobarItem([
                    {
                        index: 3,
                        title: "Back",
                        img: ImgBack,
                        onClick: (history) => {
                            let url = window.location.href;
                            if (url.indexOf("/repairedbill") !== -1) {
                                let maban = url.substring(url.lastIndexOf('/') + 1, url.length);
                                props.socket.emit('release', {
                                    maban: parseInt(maban) - 1,
                                    mahoadon: ""
                                })
                            }
                            history.goBack();
                        },
                    },
                    {
                        index: 0,
                        title: "Sản Phẩm",
                        img: ImgProduct,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/products') {
                                history.push("/products");
                            }
                            setIndex(0);
                            document.title = "Sản Phẩm";
                        },
                    },
                    {
                        index: 1,
                        title: "Dịch vụ",
                        img: ImgServices,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/services') {
                                history.push("/services");
                            }
                            setIndex(1);
                            document.title = "Dịch vụ sửa chữa";
                        },
                    },
                    {
                        index: 2,
                        title: "Bán Lẻ",
                        img: ImgBanLe,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/banle') {
                                history.push("/banle");
                            }

                            setIndex(2);
                            document.title = "Hóa đơn bán lẻ";
                        },
                    },
                    {
                        index: 4,
                        title: "Thống kê",
                        img: ImgThongKe,
                        onClick: (history, setIndex) => {
                            if (history.location.pathname !== '/thongke') {
                                history.push("/thongke");
                            }

                            setIndex(4);
                            document.title = "Thống kê bill";
                        },
                    },
                ])
            }
            props.getAllProduct(props.token);
        }
    },[props.info]);

    return (
        <WraperToolBar>
            <DivFlexRow>
                {
                    mListToobarItem.map(item => (
                        <React.Fragment key={item.ChamCong}>
                            <CToolBarItem isActive={index === item.ChamCong ? true : false} title={item.title} img={item.img} onClick={() => item.onClick(props.history, setIndex)} />
                        </React.Fragment>
                    ))
                }
            </DivFlexRow>
            <CToolBarItem title={"Đăng xuất"} img={ImgLogout} onClick={() => props.logout()} />
        </WraperToolBar>
    )
}
const mapState = (state) => ({
    info: state.Authenticate.info,
    token: state.Authenticate.token,
})
const mapDispatch = (dispatch) => ({
    logout: () => { dispatch(logout()) },
    getAllProduct: (token) => {dispatch(getAllProduct(token))}
})

export default connect(mapState, mapDispatch)(withRouter(ToolBar));