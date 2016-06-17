import { combineReducers } from "redux";
import {GETMESSAGESUCCESS,CHANGE_LANGUAGE} from '../constants/index'
import assign from 'object-assign'

const initialState = {
  language:''
}



function Guest(state = initialState,action){
  switch (action.type) {
    case GETMESSAGESUCCESS:
      return assign({},state,{guestDetail:action.data.records})
      break;
    case CHANGE_LANGUAGE:
      return assign({},state,{language:action.language})
      break;
    default:
      return state;

  }

}

const rootReducer = combineReducers({
  Guest
})

export default rootReducer
