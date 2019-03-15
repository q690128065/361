import * as type from "./type";

const actionCreators = {
  getList() {
    return dispatch => {
      fetch("/data/list.json")
        .then(res => res.json())
        .then(result => {
          let action = {
            type: type.GET_LIST,
            payload: result
          };
          dispatch(action);
        })
        .catch(err => console.log(err));
    };
  }
};

export default actionCreators;
