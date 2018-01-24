import React, { Component } from 'react';

export default class SizeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height
    }
    this.changeHeight = this.changeHeight.bind(this);
    this.changeWidth = this.changeWidth.bind(this);
  }

  changeHeight = () => {
    this.setState({
      height: event.target.value
    })
  }

  changewidth = () => {
    this.setState({
      width: event.target.value
    });
  }
  render() 
  {
    return (
      <div>
        <input type="number" onChange={this.changeWidth} placeholder="width" value={this.state.width} />
        <input type="number" onChange={this.changeHeight} placeholder="height" value={this.state.height} />
        <button onClick={props.setGridSize(this.state.width, this.state.height)}>Set grid</button>
      </div>
    );
  }
}