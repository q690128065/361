
import { connect } from 'react-redux'

import { bindActionCreators} from 'redux'




const storeConnect = (stateType,comp,action) => {
  return connect(
    state => state[stateType],
    dispatch => {
      return bindActionCreators(action,dispatch)
    }
  )(comp)
}



export default storeConnect
