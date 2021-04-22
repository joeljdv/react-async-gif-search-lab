import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
 
let baseApi = 'https://api.giphy.com/v1/gifs/search?q='
let apiKey = '&api_key=PXbpl9e0yjPUa2fZi3cy2y4wvi3ryLfH&rating=g&limit=3'


export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            input:'',
            gif:[]
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(baseApi+`${this.state.input}`+apiKey)
        .then(res => res.json())
        .then(data => {
            this.setState({
                gif:data.data
            })
        })
    }
    
    handleInput = (e) =>{
        this.setState({
            input: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                {this.componentDidMount}
                {this.state.gif.map(gif => console.log(gif.images.original.url))}
                < GifSearch handleSubmit={this.handleSubmit} value={this.handleInput}/>
                < GifList gifs={this.state.gif}/>
            </div>
        )
    }
}


