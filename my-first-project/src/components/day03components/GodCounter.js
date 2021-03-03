import { Component } from "react";

class GodCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 1,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick);
    }

    handleClick() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {

        return (
            <>
                <h1>GodCounter</h1>
                <p>Result: {this.state.counter}</p>
            </>
        );
    }
}

export default GodCounter;