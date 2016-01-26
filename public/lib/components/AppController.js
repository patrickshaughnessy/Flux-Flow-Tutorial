import React from "react";
import Input from "./Input";
import Messages from "./Messages";

import MessageActions from '../actions/MessageActions';
import MessageStore from '../stores/MessageStore';

let _getAppState = () => {
  return {
    messages: MessageStore.getAllMessages()
  }
}

class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }


  componentDidMount(){
    MessageStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    MessageStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState(_getAppState());
  }

  submitMessage(newMessage, event){
    event.preventDefault();
    MessageActions.addNewMessage({ text: newMessage });
  }

  render(){
    return(
      <div className="app">
        <Input clickHandler={this.submitMessage.bind(this)} />
        <Messages messages={this.state.messages} />
      </div>
    )
  }
}

export default AppController
