// Create an `<Adder>` component. It should have a number `<input>` field and an “Add” `<button>`. 
// When the “Add” button is pressed the number should be added to a list of numbers on screen and
//  the total of all the numbers in the list should be displayed below. **Make sure you test the
//  total is correct: try 1, 2, and 3 and check you get 6**

import { Component } from "react";

class Adder extends Component {

    constructor(props) {

        super(props);

        this.state = {
            total: 0,
            numberToAdd: 0,
            numbers: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
    }

    handleNumbers(e) {
        this.setState({ numberToAdd: e.currentTarget.value });
    }

    handleClick(e) {
        let numbers = [...this.state.numbers]
        numbers.push(<p>{this.state.numberToAdd}</p>);
        this.setState({
            total: Number(this.state.total) + Number(this.state.numberToAdd),
            numbers: numbers
        });
    }

    render() {

        return (
            <>
                <h1>Adder</h1>
                <ul>
                    {this.state.numbers}
                </ul>
                <input type="number" onChange={this.handleNumbers}></input>
                <button onClick={this.handleClick}>Add</button>
                <p>{this.state.total}</p>
                <br></br>
            </>
        );
    }
}

export default Adder;