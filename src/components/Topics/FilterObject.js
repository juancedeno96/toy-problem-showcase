import React, {Component} from 'react';

export default class FilterObject extends Component {
    render () {
        return (
            <div className="puzzleBox filterObjectPB" >
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.pokemon, null, 10) }</span>
                <input className="inputLine" onChange={ (e)=> this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterPokemon(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredPokemon, null, 10)}</span>
            </div>
        )
    }
    constructor() {
        super();
        this.state = {
        pokemon: [
            {
                name: 'Pikachu',
                type: 'Electric',
                color: 'Yellow',
                trainer: 'Ash'
            },
            {
                name: 'Charizard',
                type: 'Fire',
                specialMove: 'Blastburn'
            },
            {
                name: 'Mewtwo',
                color: 'Purple',
                IQ: 300
            }
        ],
        userInput :'',
        filteredPokemon: []
        }
    }
    handleChange(val){
        this.setState({userInput: val})

    }
    filterPokemon(id) {
        let pokemon = this.state.pokemon;
        let filteredPokemon = []
        for (let i =0; i<pokemon.length; i++) {
            if (pokemon[i].hasOwnProperty(id)) { //hasOwnProperty returns boolean indicating whether the object has the specified property as its own property (as oppsed to inheriting it)
                filteredPokemon.push(pokemon[i])
            }
        }
        this.setState({filteredPokemon: filteredPokemon})
    }
}