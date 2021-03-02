import { Component } from "react";

class StepCounter extends Component {

    constructor(props) {

        super(props);

        const {step} = props;

        this.state = {
            plusClicked: false,
            minusClicked: false,
            number: 0,
            step: step
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        if (this.state.number < this.props.max) {

            this.setState({
                ...this.state,
                number: this.state.number + this.state.step
            })
        }
    }

    decrement() {

        this.setState({
            number: this.state.number - this.state.step
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

export default StepCounter;