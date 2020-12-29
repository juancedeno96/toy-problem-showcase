import React, {Component} from 'react';

export default class FilterString extends Component {
    render() {
        return (
            <div className = "puzzleBox filterStringPB" >
                <h4>Filter String</h4>
                <span className = "puzzleText">Songs: {JSON.stringify(this.state.songs, null, 10)}</span>
                <input className = "inputLine" onChange = {(e)=> this.handleChange(e.target.value)}/>
                <button className= "confirmationButton" onClick={()=>this.filterSongs(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringsRB">Filtered Songs: {JSON.stringify(this.state.filteredSongs, null, 10)}</span>

            </div>
        )
    }
    constructor() {
        super() ;
        this.state = {
            songs: ['Hey Jude', 'Yellow Submarine', 'Let It Be', 'Come Together', 'Eleanor Rigby', 'A Day In The Life', 'Drive My Car'],
            userInput: '',
            filteredSongs: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }
    filterSongs(str) {
        let songs = this.state.songs
        let filteredSongs= []
        for (let i=0; i<songs.length; i++) {
            if (songs[i].includes(str)) {
                filteredSongs.push(songs[i])
            }
        }
        this.setState({filteredSongs: filteredSongs})
    }
}