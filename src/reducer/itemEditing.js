import * as types from '../const/actionTypes';

var initState = {}

const itemEditing = (state = initState, action) => {
    switch(action.type){
        case types.EDIT_PRODUCT:
            
            return action.product  //receive product from action

        default:
            return state
    }
}

export default itemEditing