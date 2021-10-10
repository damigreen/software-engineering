import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
      this.state = { 
        buttonValue: 'Click me to change color!',
        buttonColor: 'blue'
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({
      buttonValue: 'Color changed!',
      buttonColor: 'green'
    });
    // document.getElementById('btn').style.backgroundColor = 'red';
  }

  render () {

    return (
      <div>
        <button id='btn'
                style={{ backgroundColor: this.state.buttonColor }}
                onClick={this.handleClick}>{this.state.buttonValue}</button>
      </div>
    )
  }
}