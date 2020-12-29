import React, {Component} from 'react';

export default class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1:0,
            number2: 0,
            sum: null
        }
    }

    updateNumber1(val){
        this.setState({number1: parseInt(val,10)})
    }

    updateNumber2(val){
        this.setState({number2: parseInt(val,10)})
    }

    add(val1, val2){
        this.setState({sum: val1+val2})
    }

    render() {
        return (
            <div className="puzzleBox SumPB">
                <h4>Sum</h4>
                <input onChange={(e)=>this.updateNumber1(e.target.value)} className="inputLine"/>
                <input onChange={(e)=>this.updateNumber2(e.target.value)} className="inputLine"/>
                <button onClick={()=>this.add(this.state.number1,this.state.number2)} className="confirmationButton">Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
            
        )
    }
}