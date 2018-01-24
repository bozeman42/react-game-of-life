import React from 'react';

export default function (props) {
  return (
    <div className="buttonBar">
      <div>
      <button onClick={props.slower}>Slower</button><input value={500 - props.speed} type="range" min={1} max={500} onChange={props.setSpeed} /><button onClick={props.faster}>Faster</button>
      </div>
      <div>
        <button onClick={props.seed}>Seed</button>
        <button onClick={props.play}>Play</button>
        <button onClick={props.stop}>Stop</button>
      </div>
    </div>
  )
}
