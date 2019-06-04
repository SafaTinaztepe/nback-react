import React, { Component } from 'react';
import './Square.css';
import Button from 'react-bootstrap/Button';


class Match extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.handlePositionMatch = this.handlePositionMatch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    document.addEventListener("keypress", this.handleKeyPress, false);
  }

  handleKeyPress(e){
    if (e.key === 'a') this.handlePositionMatch();
  }

  handlePositionMatch(){
    this.props.callback(true);
  }


  render(){
    return(
      <div style={{display:"inline block"}}>
        <Button variant="primary" id="position" onClick={this.handlePositionMatch}>A: Position Match</Button>
        <Button variant="primary" id="audio" onClick={this.handleAudioMatch}>F: Audio Match</Button>
      </div>
    )
  }

}

export default Match;
