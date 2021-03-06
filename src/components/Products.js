import React, { useState } from 'react'
import styled from 'styled-components'
import { DivFlexRow, ButtonChooseFile,Button } from '../styles'
import PhuTung from './Products/PhuTung/index'
import PhuKien from './Products/PhuKien/index'
import NonBaoHiem from './Products/NonBaoHiem/index'
import DauNhot from './Products/DauNhot/index'
import { connect } from 'react-redux'
import Loading from  '../components/Loading'
import {GetFileExportProduct,ImportPhuTung,ImportMuBH,ImportPhuKien} from '../API/Product'
import XLSX from 'xlsx';
import {setLoading} from "../actions/App";
import {getAllProduct} from "../actions/Product";

const PHU_TUNG = "PHU_TUNG";
const PHU_KIEN = "PHU_KIEN";
const NON_BH = "NON_BH";
const DAU_NHOT = "DAU_NHOT";

const Select = styled.select`
    width: ${props => props.width || 'auto'};
    padding: 8px 20px;
    margin: 8px 10px;
`

// function change_alias(alias) {
//     var str = alias;
//     str = str.toLowerCase();
//     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
//     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
//     str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
//     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
//     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
//     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
//     str = str.replace(/đ/g,"d");
//     str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
//     str = str.replace(/ + /g," ");
//     str = str.trim();
//     return str;
// }

function readFile(file, token){
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        // console.log('aaa')
        reader.readAsArrayBuffer(file)
        reader.onload = function(e){
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, {type: 'array'});

            var dataImportPhuTung={
                chitiet:[]
            }
            var dataImportMuBaoHiem={
                chitiet:[]
            }
            var dataImportDauNhot={
                chitiet:[]
            }
            var dataImportPhuKien={
                chitiet:[]
            }
            for (let k in workbook.SheetNames){

                if (k==="0"){
                    const wsname = workbook.SheetNames[k];
                    const ws = workbook.Sheets[wsname];
                    var K=ws['!ref'].split(':')[1];
                    var vitriK=parseInt(K.substring(1,K.length));

                    console.log(vitriK);
                    for(var i=3 ;i <=vitriK;i++){
                        let data={
                            maphutung:"",
                            ghichu:"",
                            tentiengviet: "",
                            mamau:"",
                            model:"",
                            loaiphutung: "phụ tùng",
                            soluongtonkho:0,
                            vitri:"",
                            giaban_head:0,
                            giaban_le:0,
                            ngaycapnhat:null,
                        }
                        if (ws["B" + i]===undefined)
                            continue
                        if(ws["B"+i] && ws["B"+i]!==null)
                            data.maphutung=ws["B"+i].v;
                        if(ws["C"+i] && ws["C"+i]!==null)
                            data.ghichu=ws["C"+i].v;
                        if(ws["D"+i] && ws["D"+i]!==null)
                            data.tentiengviet=ws["D"+i].v;
                        if(ws["E"+i] && ws["E"+i]!==null)
                            data.mamau=ws["E"+i].v;
                        if(ws["F"+i] && ws["F"+i]!==null)
                            data.model=ws["F"+i].v;
                        if(ws["G"+i] && ws["G"+i]!==null && ws["G"+i].v!=="")
                            data.soluongtonkho=ws["G"+i].v;
                        if(ws["H"+i] && ws["H"+i]!==null)
                            data.vitri=ws["H"+i].w;
                        if(ws["I"+i] && ws["I"+i]!==null)
                            data.giaban_head=ws["I"+i].v;
                        if(ws["J"+i] && ws["J"+i]!==null)
                            data.giaban_le=ws["J"+i].v;
                        if(ws["K"+i] && ws["K"+i]!==null)
                            data.ngaycapnhat=ws["K"+i].w;
                        dataImportPhuTung.chitiet.push(data)
                    }

                }

                if (k==="1") {

                    const wsname = workbook.SheetNames[k];
                    const ws = workbook.Sheets[wsname];
                    var K = ws['!ref'].split(':')[1];
                    var vitriK = parseInt(K.substring(1, K.length - 1));
                    var arr = [];
                    for (var i = 3; i <= vitriK; i++) {
                        let data = {
                            maphutung: "",
                            tentienganh: "",
                            tentiengviet: "",
                            giaban_head: 0,
                            giaban_le: 0,
                            loaiphutung: "mũ bảo hiểm",
                            soluongtonkho: 0,
                            ghichu: "",
                            vitri: "",
                            ngaycapnhat: null,
                        }
                        if (ws["B" + i]===undefined)
                            continue
                        if (ws["B" + i] && ws["B" + i] !== null)
                            data.maphutung = ws["B" + i].v;
                        if (ws["D" + i] && ws["D" + i] !== null)
                            data.ghichu = ws["D" + i].v;
                        if (ws["E" + i] && ws["E" + i] !== null)
                            data.tentienganh = ws["E" + i].v;
                        if (ws["F" + i] && ws["F" + i] !== null)
                            data.tentiengviet = ws["F" + i].v;
                        if (ws["G" + i] && ws["G" + i] !== null)
                            data.soluongtonkho = ws["G" + i].v;
                        if (ws["H" + i] && ws["H" + i] !== null)
                            data.vitri = ws["H" + i].w;
                        if (ws["K" + i] && ws["K" + i] !== null)
                            data.giaban_head = ws["K" + i].v;
                        if (ws["N" + i] && ws["N" + i] !== null)
                            data.giaban_le = ws["N" + i].v;
                        if (ws["O" + i] && ws["O" + i] !== null)
                            data.ngaycapnhat = ws["O" + i].w;
                        dataImportMuBaoHiem.chitiet.push(data)
                    }
                    console.log(dataImportPhuTung)


                }


                if (k==="2") {

                    const wsname = workbook.SheetNames[k];
                    const ws = workbook.Sheets[wsname];
                    var K = ws['!ref'].split(':')[1];
                    var vitriK = parseInt(K.substring(1, K.length));

                    for (var i = 3; i <= vitriK; i++) {
                        let data = {
                            maphutung: "",
                            tentienganh: "",
                            tentiengviet: "",
                            giaban_head: 0,
                            giaban_le: 0,
                            loaiphutung: "dầu nhớt",
                            soluongtonkho: 0,
                            ghichu: "",
                            vitri: "",
                            ngaycapnhat: null,
                        }
                        if (ws["B" + i]===undefined )
                            continue
                        if (ws["B" + i] && ws["B" + i] !== null)
                            data.maphutung = ws["B" + i].v;
                        if (ws["D" + i] && ws["D" + i] !== null)
                            data.ghichu = ws["D" + i].v;
                        if (ws["E" + i] && ws["E" + i] !== null)
                            data.tentienganh = ws["E" + i].v;
                        if (ws["F" + i] && ws["F" + i] !== null)
                            data.tentiengviet = ws["F" + i].v;
                        if (ws["J" + i] && ws["J" + i] !== null)
                            data.soluongtonkho = ws["J" + i].v;
                        if (ws["K" + i] && ws["K" + i] !== null)
                            data.vitri = ws["K" + i].w;
                        if (ws["L" + i] && ws["L" + i] !== null)
                            data.giaban_head = ws["L" + i].v;
                        if (ws["O" + i] && ws["O" + i] !== null)
                            data.giaban_le = ws["O" + i].v;
                        if (ws["P" + i] && ws["P" + i] !== null)
                            data.ngaycapnhat = ws["P" + i].w;
                        dataImportDauNhot.chitiet.push(data)
                    }
                    // console.log(dataImportDauNhot)


                }

                if (k==="3"){
                    const wsname = workbook.SheetNames[k];
                    const ws = workbook.Sheets[wsname];
                    var K=ws['!ref'].split(':')[1];
                    var vitriK=parseInt(K.substring(1,K.length));


                    for(var i=3 ;i <=vitriK;i++){
                        let data={
                            maphutung:"",
                            ghichu:"",
                            tentiengviet: "",
                            tentienganh: "",
                            mau:"",
                            model:"",
                            loaiphutung: "phụ kiện",
                            soluongtonkho:0,
                            vitri:"",
                            giaban_head:0,
                            giaban_le:0,
                            ngaycapnhat:null,
                            loaixe:""
                        }
                        if (ws["C" + i]===undefined)
                            continue
                        if(ws["C"+i] && ws["C"+i]!==null)
                            data.maphutung=ws["C"+i].v;
                        if(ws["B"+i] && ws["B"+i]!==null)
                            data.loaixe=ws["B"+i].v;
                        if(ws["E"+i] && ws["E"+i]!==null)
                            data.ghichu=ws["E"+i].v;
                        if(ws["H"+i] && ws["H"+i]!==null)
                            data.tentiengviet=ws["H"+i].v;
                        if(ws["F"+i] && ws["F"+i]!==null)
                            data.mamau=ws["F"+i].v;
                        if(ws["I"+i] && ws["I"+i]!==null)
                            data.model=ws["I"+i].v;
                        if(ws["J"+i] && ws["J"+i]!==null && ws["J"+i].v!=="")
                            data.soluongtonkho=ws["J"+i].v;
                        if(ws["K"+i] && ws["K"+i]!==null)
                            data.vitri=ws["K"+i].w;
                        if(ws["L"+i] && ws["L"+i]!==null)
                            data.giaban_head=ws["L"+i].v;
                        if(ws["M"+i] && ws["M"+i]!==null)
                            data.giaban_le=ws["M"+i].v;
                        if(ws["N"+i] && ws["N"+i]!==null)
                            data.ngaycapnhat=ws["N"+i].w;
                        dataImportPhuKien.chitiet.push(data)
                    }

                }

            }
            return ImportPhuTung(token,dataImportPhuTung).then(()=>{
                return ImportMuBH(token, dataImportMuBaoHiem);
            }).then(()=>{
                return ImportMuBH(token, dataImportDauNhot);
            }).then(()=>{
                return ImportPhuKien(token,dataImportPhuKien)
            }).then(()=>{
                alert("Thêm thành công")
                resolve()
            }).catch(()=>{
                alert("Lỗi khi thêm")
                reject();
            });

        }
        reader.onloadend=function(e){
            // return resolve(dataws);
        }
        reader.onerror=function(e){
            return reject(e);
        }
    })
}
const Products = (props) => {

    let [mSanPham, setSanPham] = useState(PHU_TUNG);


    const handleChoseFile =async (e) => {
        var files = e.target.files;
        props.setLoading(true);
        try {
            await readFile(files[0],props.token)
            props.getAllProduct(props.token);
            console.log("toi khong")
            props.setLoading(false);
        }
        catch(err ){
            props.setLoading(false);
        };


        // res = {...res[0], ...res[1]};
        // res['kiem ke'] = res['kiem ke'].filter((e, index) => e.length > 0 && index >3);
        // res['phu kien'] = res['phu kien'].filter((e, index) => e.length > 0 && index > 2)
        // res['phu tung'] = res['phu tung'].filter((e, index) => e.length > 0 && index > 2)
        // res['non bao hiem'] = res['phu tung'].filter((e, index) => e.length > 0 && index > 2)
        // res['dau nhot'] = res['phu tung'].filter((e, index) => e.length > 0 && index > 2)

    }
    const  handleExportFile=(e)=>{

        GetFileExportProduct(props.token).then(response=>{
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Danh sách thống kê kho.xlsx'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }).catch(err=>{
            alert("Không thể xuất file");
        })
    }
    return (
        <div>
            {props.isLoading && <Loading/>}
            {!props.isLoading &&
            <div>
                <DivFlexRow style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <DivFlexRow>
                        <h3>Loại sản phẩm: </h3>
                        <Select value={mSanPham} onChange={(e) => {
                            setSanPham(e.target.value)
                        }} >
                            <option value={PHU_TUNG}>Phụ tùng</option>
                            <option value={PHU_KIEN}>Phụ kiện</option>
                            <option value={NON_BH}>Nón bảo hiểm</option>
                            <option value={DAU_NHOT}>Dầu nhớt</option>
                        </Select>
                    </DivFlexRow>
                    <div>
                        <ButtonChooseFile style={{marginRight:30}}>
                            <input type="file"
                                   multiple
                                   accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                   onChange={(e) => handleChoseFile(e)} />
                            Import +
                        </ButtonChooseFile>
                        <Button onClick={(e)=>handleExportFile(e)} >Export file thống kê</Button>
                    </div>
                </DivFlexRow>
                <div style={{ marginTop: 15 }}>
                    <PhuTung
                        token={props.token}
                        isActive={mSanPham === PHU_TUNG}
                    />
                    <PhuKien
                        token={props.token}
                        isActive={mSanPham === PHU_KIEN}
                    />
                    <NonBaoHiem
                        token={props.token}
                        isActive={mSanPham === NON_BH}
                    />
                    <DauNhot
                        token={props.token}
                        isActive={mSanPham === DAU_NHOT}
                    />
                </div>
            </div>

            }


        </div>
    )
}

const mapState = (state) => ({
    token: state.Authenticate.token,
    isLoading:state.App.isLoading
})
const mapDispatch = (dispatch) => ({
    setLoading: (isLoad) => {dispatch(setLoading(isLoad))},
    getAllProduct: (token) => {dispatch(getAllProduct(token))}
})
export default connect(mapState,mapDispatch)(Products);