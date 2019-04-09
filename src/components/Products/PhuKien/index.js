import React, { useState, useEffect } from 'react';
import { ProductContainer, DivFlexRow, Button, Table, DelButton ,Input} from '../../../styles'
import PopupPhuKien from './PopupPhuKien';
import { DelPhuKien } from '../../../API/PhuKiemAPI'
import {connect} from 'react-redux'
import _ from "lodash";

const PhuKienItem = ({
    item,
    token,
    getList = () => { },
}) => {

    const handleDelItem = () => {
        DelPhuKien(token, item.ma).then(res => {
            alert("Xóa thành công.");
            getList();
        })
            .catch(err => {
                alert("Không xóa được. @@");
            })
    };

    return (
        <tr>
            <td>{item.maphutung}</td>
            <td>{item.tentiengviet}</td>
            <td>{item.ghichu}</td>

            <td>{item.giaban_head}</td>
            <td>{item.giaban_le}</td>
            <td>{item.vitri}</td>
            <td>{item.soluongtonkho}</td>
            <td>{item.loaixe}</td>
            <td>
                <Button ><i className="fas fa-cog"></i></Button>
                <DelButton onClick={handleDelItem} style={{ marginLeft: 5 }}><i className="far fa-trash-alt"></i></DelButton>
            </td>
        </tr>
    )
}

const PhuKien = (props) => {

    let [isShowing, setShowing] = useState(false);

    let [mArrPhuKien, setArrPhuKien] = useState([]);
    let [searchValue, setSearchValue] = useState("");
    let [maxPage, setMaxPage] = useState(0);
    let [page, setPage] = useState(0);

    useEffect(() => {
        console.log(props.listPhuKien)
        if(props.listPhuKien) {
            tachList(props.listPhuKien)
        }
    }, [props.listPhuKien]);

    const handleButtonSearch = () => {
        let search = "";
        if(searchValue === "") {
            search = "ALL"
        }
        else {
            search= searchValue;
        }
        let list = props.listPhuKien.filter(function(item){
            return (checkHasRender(search,item));
        });
        tachList(list);
    };

    const _handleKeyPress=(e)=> {
        if (e.key === 'Enter') {
          handleButtonSearch();
        }
      };

    const handleNextPage = () => {
        let newPage = page + 1;
        if (newPage >= maxPage) {
            newPage = 0;
        }
        setPage(newPage);
    };

    const handlePrevPage = () => {
        let newPage = page - 1;
        if (newPage < 0) {
            newPage = maxPage - 1;
        }
        setPage(newPage);
    };

    const tachList = (list) => {
        let tmp = _.chunk(list, 150);
        setArrPhuKien(tmp);
        setMaxPage(tmp.length);
        setPage(0);
    };

    const checkHasRender = (Search, item) => {
        let strSearch = Search.toLowerCase();
        return (Search === "ALL" || item.tentiengviet.toLowerCase().includes(strSearch) || item.maphutung.toLowerCase().includes(strSearch));
    };

    return (
        <ProductContainer className={props.isActive ? "active" : ""}>
            <DivFlexRow style={{ justifyContent: 'space-between' }}>
                <h3>Danh sách phụ tùng</h3>
                <Button onClick={() => setShowing(true)}>Thêm mới</Button>
            </DivFlexRow>
            <DivFlexRow style={{alignItems: 'center', justifyContent: 'space-between', marginTop: 5, marginBottom: 15}}>
                <DivFlexRow style={{alignItems: 'center'}}>
                    <Input onKeyPress={_handleKeyPress} style={{width: 250, marginRight: 15}}
                           onChange={(e) => setSearchValue(e.target.value)}/>
                    <Button onClick={() => {
                        handleButtonSearch();
                    }}>
                        Tìm Kiếm
                        <i className="fas fa-search"/>
                    </Button>
                </DivFlexRow>

                <DivFlexRow>
                    <Button onClick={handlePrevPage}>
                        Trang trước
                    </Button>
                    <Button style={{marginLeft: 15}} onClick={handleNextPage}>
                        Trang Sau
                    </Button>
                </DivFlexRow>
            </DivFlexRow>
            <Table style={{ marginTop: 15 }}>
                <tbody>
                    <tr>
                        <th>Mã phụ tùng</th>

                        <th>Tên tiếng việt</th>
                        <th>Ghi chú</th>
                        <th>Giá bán (head)</th>
                        <th>Giá bán lẻ</th>
                        <th>Vị trí</th>
                        <th>Số lượng <br /> tồn kho</th>
                        <th>Loại xe</th>
                        <th>Sửa/Xóa</th>
                    </tr>

                    {
                        mArrPhuKien[page] && mArrPhuKien[page].map((item, index) => (
                            <PhuKienItem
                                key={index} item={item}
                                getList={() => { }}
                            />
                        ))
                    }

                </tbody>
            </Table>

            <PopupPhuKien
                isShowing={isShowing}
                onCloseClick={() => setShowing(false)}
                getList={() => {}}
            />
        </ProductContainer>
    );
};

const mapState = (state) => ({
   listPhuKien: state.Product.listPhuKien,
});

export default connect(mapState)(PhuKien);