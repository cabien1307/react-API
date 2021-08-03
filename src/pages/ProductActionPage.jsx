import React from 'react';
import { Link } from 'react-router-dom'
import { actionAddProductAPIRequest, actionGetProductbyIdAPIRequest, actionUpdateProductbyIdAPIRequest } from '../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: false
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, name, price, status } = this.state
        var { history } = this.props; // history in routes 
        var product = {
            id,
            name,
            price,
            status
        }
        if (id) { //update product
            this.props.onUpdateProduct(product)
            history.goBack();

        } else { //add product
            this.props.onAddProduct(product)
            history.goBack();
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id)
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                name: itemEditing.name,
                price: itemEditing.price,
                status: itemEditing.status
            })
        }
    }


    render() {
        var { match } = this.props;
        var { name, price, status } = this.state
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <form onSubmit={this.onSave}>
                    {
                        match
                            ? <legend>Edit product</legend>
                            : <legend>Add product</legend>
                    }
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Input field"
                            name="name"
                            value={name}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Input field"
                            name="price"
                            value={price}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="status"
                                value={status}
                                onChange={this.onChange}
                                checked={status}
                            />
                            Còn hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
                <Link to="/products">
                    <button type="submit" style={{ marginTop: "10px" }} className="btn btn-primary">Back to products</button>
                </Link>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actionAddProductAPIRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actionGetProductbyIdAPIRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actionUpdateProductbyIdAPIRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(ProductActionPage);
