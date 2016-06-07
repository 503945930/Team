import { combineReducers } from "redux";
import {GETMESSAGESUCCESS} from '../constants/index'
import assign from 'object-assign'

const initialState = {
}



function Guest(state = initialState,action){
  switch (action.type) {
    case GETMESSAGESUCCESS:
      return assign({},state,{guestDetail:action.data.records})
      break;
    default:
      return state;

  }
}

const rootReducer = combineReducers({
  Guest
})

export default rootReducer
