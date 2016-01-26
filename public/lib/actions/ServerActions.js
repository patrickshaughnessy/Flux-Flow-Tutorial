import AppDispatcher from '../AppDispatcher';

let ServerActions = {
  receiveMessages(messages) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_MESSAGES',
      messages
    });
  }
}

export default ServerActions;
