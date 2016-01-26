import React from "react";

class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newMessage: ''
    }
  }

  updateMessageText(e){
    this.setState({ newMessage: e.target.value })
  }

  render(){
    let newMessage = this.state.newMessage;
    return(
      <form className="input">
        <input onChange={this.updateMessageText.bind(this)} type="text" placeholder="Enter a new message" />
        <button onClick={this.props.clickHandler.bind(this, newMessage)} type="submit">Submit</button>
      </form>
    )
  }
}

export default Input
