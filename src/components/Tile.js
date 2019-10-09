import React from 'react';

function Tile(props) {
    return <div onClick={props.handleClick} id={props.id} className="tile">{props.label}</div>
}
  
export default Tile;