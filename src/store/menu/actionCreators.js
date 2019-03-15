import * as type from './type'

const actionCreators = {
    menuChange(payload){
        let action = {
            type:type.CHANGE_MENU_STATE,
            payload
        }
        return action
    }
}

export default actionCreators