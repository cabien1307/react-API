import * as type from '../const/actionTypes';

var initState = [];

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if ( product.id === id ){
            result = index
        }
    });
    return result
}


const products = (state = initState, action) => {
    var index = -1;

    switch (action.type){
        case type.FETCH_PRODUCT:
            state = action.products; //product in actionFetchProduct
            return [...state]

        case type.DELETE_PRODUCT:
            index = findIndex(state, action.id)  //id in actionDeleteProduct
            state.splice(index, 1)
            return [...state]


        case type.ADD_PRODUCT:
            state.push(action.product) //product in actionAddProduct
            return [...state]

        case type.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id) //product in actionUpdateProductById
            state[index] = action.product
            return [...state] 

        default: return [...state]
    }
}

export default products