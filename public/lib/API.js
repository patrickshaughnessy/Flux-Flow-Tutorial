import {get, post} from 'jquery';

import ServerActions from './actions/ServerActions';

let API = {
  addNewMessage(message) {
    post('/messages', message).done(data => ServerActions.receiveMessages(data));
  }
}

export default API;
