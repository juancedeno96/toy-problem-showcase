import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    render () {
        return (
            <div className ="puzzleBox evenAndOddPB">
                <h4>Even and Odds</h4>
                <input className="inputLine" onChange={ (e)=> this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ ()=>{this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    assignEvenAndOdds(userInput) {
       let arr = userInput.split(','); // .split 
       let evens = [];
       let odds = [];
       for ( let i = 0; i<arr.length; i++) {
           if (arr[i]%2 === 0) {
               evens.push(parseInt(arr[i])) //parseInt apparently removes the quotes from number
           } else {
               odds.push(parseInt(arr[i]))
           }
       }
        this.setState({evenArray:  evens, oddArray: odds})
    }

    constructor() {
        super(); 
        this.state = {
            evenArray: [],
            oddArray: [], 
            userInput: ''
        }
    }
}