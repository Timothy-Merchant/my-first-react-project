import { Component } from "react";

class Length extends Component {

    constructor(props) {

        super(props);

        this.state = {
            input: "Test",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {

        return (
            <>
                <input onChange={this.handleChange} value={this.state.input}></input>
                <p>{this.state.input.length}</p>
            </>
        );
    }
}

export default Length;