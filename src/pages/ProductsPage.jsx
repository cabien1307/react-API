import React from 'react';
import Products from '../components/products/Products';
import ProductItem from '../components/productItem/ProductItem';
import { connect } from 'react-redux'
import { actionDeleteProductAPIRequest, actionFetchProductAPIRequest } from '../actions/index'

class ProductsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.props.fetchAllProduct()
    }

    

    onDelete = (id) => {
        this.props.deleteProduct(id)
    }

    render() {

        var { products } = this.props
        // var { products } = this.state
        return (
            <Products>
                {
                    products.map((product, index) => {
                        return (
                            <ProductItem
                                key={index}
                                product={product}
                                index={index}
                                onDelete={this.onDelete}
                            />
                        )
                    })
                }
            </Products>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products // name of reducer in file reducer/index.js { get on store }
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        fetchAllProduct: () => {
            dispatch(actionFetchProductAPIRequest()); 
        },
        deleteProduct: (id) => {
            dispatch(actionDeleteProductAPIRequest(id)) //send products to actionDeleteProductAPIRequest
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(ProductsPage);
