import React, { } from 'react';
import { DivFlexRow, DivFlexColumn, Table, Input } from '../../styles'
import moment from 'moment';

const RenderTableBill = ({ list }) => {

    return (
        <React.Fragment>
            <Table>
                <tbody>
                    <tr>
                        <th>STT</th>
                        <th>Tên phụ tùng <br /> và công việc</th>
                        <th>Mã phụ tùng</th>
                        <th>Đơn giá</th>
                        <th>SL</th>
                        <th>Tiền phụ tùng</th>
                        <th>Tiền công</th>
                        <th>Tổng tiền công <br />+ phụ tùng</th>
                    </tr>

                    {list && list.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.tenphutungvacongviec}</td>
                            <td>{item.maphutung}</td>
                            <td>{item.dongia}</td>
                            <td>{item.soluongphutung}</td>
                            <td>{item.dongia * item.soluongphutung}</td>
                            <td>{item.tiencong}</td>
                            <td>{item.tongtien}</td>
                        </tr>

                    ))}

                </tbody>
            </Table>
        </React.Fragment>
    )
}

const RenderBillChan = ({
    data
}) => {
    return (
        <div>
            {data && <React.Fragment>
                <DivFlexRow>
                    <DivFlexColumn>
                        <label>Tên khách hàng: </label>
                        <Input readOnly autocomplete="off" value={data.tenkh} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ marginLeft: 20 }}>
                        <label>Biển số xe: </label>
                        <Input readOnly value={data.biensoxe} />
                    </DivFlexColumn>
                </DivFlexRow>
                <DivFlexRow style={{ marginTop: 10 }}>
                    <DivFlexColumn>
                        <label>Ngày bán: </label>
                        <Input readOnly autocomplete="off" value={moment(data.ngayban).format("hh:mm DD/MM/YYYY")} />
                    </DivFlexColumn>
                    <DivFlexColumn style={{ marginLeft: 20 }}>
                        <label>Ngày thanh toán: </label>
                        <Input readOnly value={moment(data.ngayban).format("hh:mm DD/MM/YYYY")} />
                    </DivFlexColumn>
                </DivFlexRow>
                <DivFlexColumn style={{ marginTop: 10 }}>
                    <label>Tổng tiền: </label>
                    <Input readOnly value={data.tongtien} />
                </DivFlexColumn>
                <RenderTableBill list={data.chitiet} />
            </React.Fragment>}
        </div>
    );
}

export default RenderBillChan;