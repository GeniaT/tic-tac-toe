import React, { Component } from 'react';
import Tile from './Tile';

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tiles: [null,null,null,null,null,null,null,null,null],
            currentlyPlaying: 'X'
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e) {
        const { tiles, currentlyPlaying } = this.state;    
        if (tiles[e.target.id] == null) {
            tiles[e.target.id] = currentlyPlaying === "X" ? "X" : "O";
            const nextToPlay = currentlyPlaying === "X" ? "O" : "X";
    
            this.setState({
              tiles,
              currentlyPlaying: nextToPlay
            });
        }
      }

    render() {
        return (
            <div>
                <h1>Tic Tac Toe game !</h1>
                <div className='tiles' >
                    {this.state.tiles.map((tile, index) => <Tile id={index} key={index} label={tile} handleClick={this.handleClick}/>)}
                </div>
            </div>
        )
    }
}