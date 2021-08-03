import React from 'react';
import { Link } from 'react-router-dom';
import './products.css';

class Products extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add">
                    <button type="button" className="btn btn-danger" style={{ marginBottom: "20px" }}>Add product</button>
                </Link>


                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Products</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>



        )
    }
}

export default Products;
