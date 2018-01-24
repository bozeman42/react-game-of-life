import React, {Component} from 'react';
import Cell from './Cell';
export default class Grid extends Component {
  render() {
    const rows = this.props.grid.length;
    const cols = this.props.grid[0].length;
    const width = (cols * 16);
    const height = (rows * 16) + 1 ;

    function renderGrid(props) {
      return props.grid.map((row,rowIndex) => {
        return row.map((col, colIndex) => {
          let cellId = rowIndex + '_' + colIndex;
          let status = col;
          let aCell = ( <Cell 
            alive = {status}
            key = {cellId}
            cellId = {cellId}
            row = {rowIndex}
            col = {colIndex}
            selectBox = {props.selectBox}
          />
          )
          return aCell;
        })
      })
    }

    const daGrid = renderGrid(this.props);

    return (
      <div className="grid" style={{width: width, height: height}}>
        {daGrid}
      </div>
    );
  }
}