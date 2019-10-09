import React, { Component } from 'react';

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
            </div>
        )
    }
}