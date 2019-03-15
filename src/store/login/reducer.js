import state from './state'
import * as type from './type'

const reducer = (previousState = state, action)=>{
    let new_state = {...previousState}
    if(localStorage.phone&&localStorage.password){
        new_state.loginState = true
        return new_state
    }
    switch (action.type) {
        case type.CHANGE_LOGIN_STATE:
            new_state.loginState = true
            break;
    
        default:
            break;
    }
    return new_state
}

export default reducer