import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _messages = [];

class MessageStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case 'RECEIVE_MESSAGES':
          _messages = action.messages;
          this.emit('CHANGE');
          break;
      }
    });
  }

  getAllMessages() {
    return _messages;
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }
}

export default new MessageStore();
