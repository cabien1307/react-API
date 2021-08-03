import * as types from '../const/actionTypes'
import callApi from '../utils/apiCall'


/** ACTION FETCH **/ 
export const actionFetchProduct = (products) => {
    return {
        type: types.FETCH_PRODUCT,
        products   //receive product from actionFetchProduct
    }
}

export const actionFetchProductAPIRequest = () => {
    return (dispatch) => {
        return  callApi('products', 'GET', null).then( res => {
            dispatch(actionFetchProduct(res.data)) //send res.data to actionFetchProduct
        })
    }
}
/** ACTION FETCH **/ 



/** ACTION DELETE **/ 
export const actionDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id   //receive id from actionDeleteProductAPIRequest
    }
}

export const actionDeleteProductAPIRequest = (id) => {
    return (dispatch) => {
        return  callApi(`products/${id}`, 'DELETE', null).then( res => {
            dispatch(actionDeleteProduct(id)) //send id to actionDeleteProduct
        })
    }
}

/** ACTION DELETE **/ 


/** ACTION ADD **/ 
export const actionAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product //receive product from actionAddProductAPIRequest
    }
}

export const actionAddProductAPIRequest = (product) => {
    return (dispatch) => {
        return  callApi(`products`, 'POST', product).then( res => {
            dispatch(actionAddProduct(res.data)) //send product after post to actionAddProduct
        })
    }
}

/** ACTION ADD **/ 

/** ACTION UPDATE **/
    // Get Product by ID to update
export const actionGetProductById = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product //receive product from actionGetProductbyIdAPIRequest
    }
}
export const actionGetProductbyIdAPIRequest = (id) => {
    return (dispatch) => {
        return  callApi(`products/${id}`, 'GET', null).then( res => {
            dispatch(actionGetProductById(res.data)) //send product after post to actionGetProductById
        })
    }
}
    // Get Product by ID to update

    // Update
    export const actionUpdateProductById = (product) => {
        return {
            type: types.UPDATE_PRODUCT,
            product //receive product from actionUpdateProductbyIdAPIRequest
        }
    }
    export const actionUpdateProductbyIdAPIRequest = (product) => {
        return (dispatch) => {
            return  callApi(`products/${product.id}`, 'PUT', product).then( res => {
                dispatch(actionUpdateProductById(res.data)) //send product after post to actionUpdateProductById
            })
        }
    }
    // Update



/** ACTION UPDATE **/ 