import React, { Component } from 'react'

export default class Tile extends Component {
    render() {
        return (
            <div onClick={this.props.handleClick} id={this.props.id} className="tile">{this.props.label}</div>
        )
    }
}