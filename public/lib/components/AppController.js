import React from "react";
import Input from "./Input";
import Messages from "./Messages";

import MessageActions from '../actions/MessageActions'

class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }

  submitMessage(newMessage, event){
    event.preventDefault();
    MessageActions.addNewMessage({ text: newMessage });
  }

  render(){
    return(
      <div className="app">
        <Input clickHandler={this.submitMessage.bind(this)} />
        <Messages />
      </div>
    )
  }
}

export default AppController
