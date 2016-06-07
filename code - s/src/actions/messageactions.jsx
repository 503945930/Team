import * as server from './serveraction'
import  {GETMESSAGESUCCESS} from '../constants/index'

function getMessageSuccess(data) {
  return {
    type: GETMESSAGESUCCESS,
    data: data
  }
}

export function fetchGuestMessage() {
  return (dispatch) => {
    return server.makeRequest('https://api.airtable.com/v0/appXsErSKAgriK9N6/guest?view=Main%20View', 'get', {}).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function(data) {
      return dispatch(getMessageSuccess(data));
    })

  }
}
