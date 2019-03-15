import * as type from './type'

const actionCreators = {
    login(){
        let action = {
            type:type.CHANGE_LOGIN_STATE
        }
        return action
    }
}

export default actionCreators