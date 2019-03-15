import state from './state'
import * as type from './type'

const reducer = (previousState = state, action)=>{
    let new_state = {...previousState}
    switch (action.type) {
        case type.GET_LIST:
            new_state.list = action.payload
            break;
    
        default:
            break;
    }
    return new_state
}

export default reducer