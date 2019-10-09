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
            if (this.checkWin(currentlyPlaying) || tiles.filter((x) => x != null).length === 9) {
                return this.endGame();
            }
            const nextToPlay = currentlyPlaying === "X" ? "O" : "X";
            this.setState({
              tiles,
              currentlyPlaying: nextToPlay
            });
        }

      }

      checkWin(player) {
        const { tiles } = this.state;
        const horizontal = [0,3,6].map(i => [i,i+1,i+2]);
        const vertical = [0,1,2].map(i => [i,i+3,i+6]);
        const diagonal = [[0,4,8],[2,4,6]];
        const allwins = [].concat(horizontal).concat(vertical).concat(diagonal);
        const result = allwins.some(indices => { 
            return tiles[indices[0]] === player && tiles[indices[1]] === player && tiles[indices[2]] === player
        })
            return result;
        }
      
        endGame() {
            console.log("GAME OVER!")
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