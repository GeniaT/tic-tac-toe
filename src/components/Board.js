import React, { Component } from 'react';
import Tile from './Tile';

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tiles: [null,null,null,null,null,null,null,null,null],
            currentlyPlaying: 'X'
        }
    }

    render() {
        return (
            <div>
                <h1>Tic Tac Toe game !</h1>
                <div className='tiles' >
                    {this.state.tiles.map((tile, index) => <Tile key={index}/>)}
                </div>
            </div>
        )
    }
}