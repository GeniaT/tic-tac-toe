import React, { Component } from 'react';
import '../styles/Board.css';
import Tile from './Tile';
import  { allwins } from '../constants';
class Board extends Component {
    state = {
        tiles: new Array(9).fill(null),
        currentPlayer: 'X',
        gameStatus: 'on'
    }

    handleClick = (e) => {
        const { tiles, currentPlayer } = this.state;  
        const { id } = e.target;  
        if (tiles[id] == null && this.state.gameStatus === 'on') {
            this.labelTile(currentPlayer, id);

            const gameStatus = this.getGameStatus(currentPlayer);
            if (gameStatus !== 'on') {
                return this.endGame(gameStatus);
            } 
            this.setNextPlayer(currentPlayer);
        }
    }

    getGameStatus(currentPlayer) {
        if (this.checkWin(currentPlayer)) {
            return currentPlayer + ' won the game';
        } else if (this.allTilesPlayed()) {
            return "It's a tie!";
        }
        return "on";
        
    }

    allTilesPlayed() {
        return this.state.tiles.filter(x => x != null).length === 9;
    }

    labelTile(player, tileId) {
        const { tiles } = this.state;    
        tiles[tileId] = player;
        this.setState({...this.state, tiles})
    }

    setNextPlayer(currentPlayer) {
        const nextToPlay = currentPlayer === "X" ? "O" : "X";
        this.setState({
            ...this.state,
            currentPlayer: nextToPlay
        });
    }

    checkWin(player) {
        const { tiles } = this.state;
        const result = allwins.some(indices => { 
            return tiles[indices[0]] === player && tiles[indices[1]] === player && tiles[indices[2]] === player;
        });
        return result;
    }
      
    endGame(result) {
        this.setState({...this.state, gameStatus: result});
    }

    restart = () => {
        this.setState({...this.state, 
            tiles: new Array(9).fill(null),
            currentPlayer: 'X',
            gameStatus: 'on'
        })
    }

    render() {
        return (
            <div>
                <h1>Tic Tac Toe game !</h1>
                <div className='tiles' >
                    {this.state.tiles.map((tile, index) => <Tile id={index} key={index} label={tile} handleClick={this.handleClick}/>)}
                </div>
                {this.state.gameStatus !== 'on' ? <div><p>{this.state.gameStatus}</p><button className='restart' onClick={this.restart}>Restart</button></div> : null}
            </div>
        )
    }
}

export default Board;