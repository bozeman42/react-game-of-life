import React,{Component} from 'react';

export default class Cell extends Component {
  
  selectBox = () => {
    this.props.selectBox(this.props.row,this.props.col);
  }

  render() {
    let cellClass = 'cell ' + (this.props.alive?'alive':'dead');
    return (
      <div 
        className = {cellClass}
        id = {this.props.id}
        onClick = {this.selectBox}
        />
    );
  }
}