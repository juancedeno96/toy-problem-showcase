import React, {Component} from 'react';

export default class Palindrome extends Component {
    render() {
        return (
            <div className="puzzleBox FilterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={()=>this.isPalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
    constructor() {
        super();
        this.state= {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }
   
}