import {combineReducers} from 'redux'

import login from './login/reducer'
import menu from './menu/reducer'
import list from './list/reducer'

const reducer = combineReducers({
    login,menu,list
})

export default reducer