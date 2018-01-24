import React, { Component } from 'react';
import Grid from './Grid';
import GenerationCounter from './GenerationCounter';
import ButtonBar from './ButtonBar';
export default class App extends Component {
  constructor() {
    super();
    this.rows = 30;
    this.cols = 50;
    this.state = {
      speed: 100,
      generation: 0,
      grid: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
    this.setSpeed = this.setSpeed.bind(this);
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.grid);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      grid: gridCopy
    });
  }

  seed = () => {
    let gridCopy = arrayClone(this.state.grid);
    gridCopy = gridCopy.map((row) => {
      return row.map((cell) => {
        let alive = false;
        if (Math.floor(Math.random() * 4) === 1) {
          alive = true;
        }
        return alive;
      })
    })
    this.setState({
      grid: gridCopy,
      generation: 0
    });
  }

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.state.speed);
  }

  stop = () => {
    clearInterval(this.intervalId);
  }

  faster = () => {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      });
    }
    console.log(this.state.speed);
    this.playButton();
  }
  slower = () => {
    this.setState({
      speed: this.state.speed + 10
    });
    console.log(this.state.speed);
    this.playButton();
  }

  play = () => {
    let g = this.state.grid;
    let g2 = g.map((row, i) => {
      return row.map((col, j) => {
        let count = 0;
        let result = false;
        if (i > 0) {
          if (g[i - 1][j]) {
            count++;
          }
        }
        if (i > 0 && j > 0) {
          if (g[i - 1][j - 1]) {
            count++;
          }
        }
        if (i > 0 && j < this.cols - 1) {
          if (g[i - 1][j + 1]) {
            count++;
          }
        }
        if (j < this.cols - 1) {
          if (g[i][j + 1]) {
            count++;
          }
        }
        if (j > 0) {
          if (g[i][j - 1]) {
            count++;
          }
        }
        if (i < this.rows - 1) {
          if (g[i + 1][j]) {
            count++;
          }
        }
        if (i < this.rows - 1 && j > 0) {
          if (g[i + 1][j - 1]) {
            count++;
          }
        }
        if (i < this.rows - 1 && j < this.cols - 1) {
          if (g[i + 1][j + 1]) {
            count++;
          }
        }
        if (g[i][j] && (count < 2 || count > 3)) {
          result = false;
        } else if (!g[i][j] && count === 3) {
          result = true;
        } else {
          result = g[i][j];
        }
        return result;
      });
    });
    this.setState({
      grid: g2,
      generation: this.state.generation + 1
    })
  }

  setSpeed = (event) => {
    console.log(event);
    this.setState({
      speed: 500 - event.target.value
    })
    this.playButton();
  }

  componentDidMount() {
    this.seed();
    this.playButton();
  }

  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        
        <ButtonBar speed={this.state.speed} seed={this.seed} slower={this.slower} setSpeed={this.setSpeed} faster={this.faster} play={this.playButton} stop={this.stop} />
        <Grid grid={this.state.grid} selectBox={this.selectBox} />
        <GenerationCounter generation={this.state.generation} />
      </div>
    );
  }

}

function arrayClone(array) {
  return array.map((item) => { return item; });
}