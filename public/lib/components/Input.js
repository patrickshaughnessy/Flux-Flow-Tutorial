import React from "react";

class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <form className="input">
        <input type="text" placeholder="Enter a new message" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Input
