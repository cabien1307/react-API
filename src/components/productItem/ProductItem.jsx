import React from 'react';
import { Link } from 'react-router-dom';
import './productItem.css';

class ProductItem extends React.Component {

    onDelete = (id) => {
        if (confirm('Are you sure delete item ?')) { //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {
        var { product, index } = this.props
       
        var status = product.status ? "Còn hàng" : "Hết hàng"
        var statusClass = product.status ? "success" : "warning"
        return (

            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{new Intl.NumberFormat().format(product.price)} VND</td>
                <td>

                    <span className={`label label-${statusClass}`}>{status}</span>

                </td>
                <td>
                    <Link to={ `/product/${product.id}/edit` }>
                        <button type="button" className="btn btn-default">Edit</button>
                    </Link>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;
