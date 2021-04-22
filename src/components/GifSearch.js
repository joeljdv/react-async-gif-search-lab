import React, { Component } from 'react'

export default class GifSearch extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type='text' onChange={this.props.value}></input>
                </form>
                <button onClick={this.props.handleSubmit}>Find Gifs</button>
            </div>
        )
    }
}
