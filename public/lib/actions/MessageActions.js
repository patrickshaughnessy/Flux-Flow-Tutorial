import API from '../API';

let MessageActions = {
  addNewMessage(message){
    API.addNewMessage(message);
  }
}

export default MessageActions;
