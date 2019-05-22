import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Square.css';


class Square extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      state: props.state
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      state: !this.state.state
    });
  }

  render(){
    return(
      <div id={this.state.id} className={`sq ${this.state.state}`} onClick={this.handleClick}>
      </div>
    )
  }

}

export default Square;
