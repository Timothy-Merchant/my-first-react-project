import { Component } from "react";

class Counter extends Component {

    constructor(props) {

        super(props);

        this.state = {
            plusClicked: false,
            minusClicked: false,
            number: this.props.initial
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        if (this.state.number < this.props.max) {

            this.setState({
                ...this.state,
                number: this.state.number + 1
            })
        }
    }

    decrement() {

        this.setState({
            number: this.state.number - 1
        })
    }

    render() {

        return (
            <>
                <p>{this.state.number}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        );
    }
}

export default Counter;