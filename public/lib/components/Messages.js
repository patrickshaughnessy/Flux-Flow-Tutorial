import React from "react";

class Messages extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    let messages = this.props.messages.map((message, i) => {
      return <li key={i}>{message}</li>
    })

    return(
      <div className="messages">
        <h1>New Messages:</h1>
        <ul>
          {messages}
        </ul>
      </div>
    )
  }
}

export default Messages
