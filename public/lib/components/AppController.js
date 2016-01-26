import React from "react";
import Input from "./Input";
import Messages from "./Messages";

class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div className="app">
        <Input />
        <Messages />
      </div>
    )
  }
}

export default AppController
