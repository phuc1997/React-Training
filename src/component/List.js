import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                                <td>
                                    <select className="form-control">
                                        <option value="-1">Tất Cả</option>
                                        <option value="0">Ẩn</option>
                                        <option value="1">Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Học lập trình</td>
                                <td className="text-center">
                                    <span className="label label-success">
                                        Kích Hoạt
                                                </span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-warning">
                                        <span className="fa fa-pencil mr-5"></span>Sửa
                                    </button>
                                    &nbsp;
                                    <button type="button" className="btn btn-danger">
                                        <span className="fa fa-trash mr-5"></span>Xóa
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );

    }
}

export default List;
