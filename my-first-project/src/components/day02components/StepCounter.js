import { Component } from "react";

class StepCounter extends Component {

    constructor(props) {

        super(props);        

        this.state = {
            number: 0,            
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        if (this.state.number < this.props.max) {
            this.setState({
                number: this.state.number + this.props.step
            })
        }
    }

    decrement() {
        this.state.number - this.props.step > 0 ?
            this.setState({ number: this.state.number - this.props.step }) :
            this.setState({ number: 0 })
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