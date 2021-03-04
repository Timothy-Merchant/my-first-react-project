import { Component } from "react";

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.

class PasswordStrength extends Component {

    constructor(props) {

        super(props);

        this.state = {
            input: "Test",
            backgroundColor: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(e) {

        this.setState({ input: e.currentTarget.value });

        if (this.state.input.length > 16) {
            this.setState({ backgroundColor: "green" })
        } else if (this.state.input.length > 9) {
            this.setState({ backgroundColor: "orange" })
        } else if (this.state.input.length < 9) {
            this.setState({ backgroundColor: "red" })
        } else if (this.state.input.length < 1) {
            this.setState({ backgroundColor: "white" })
        }

    }

    render() {

        return (
            <>
                <h1>PasswordStrength</h1>
                <input
                    type="password"
                    onChange={this.handleChange}
                    style={{ backgroundColor: this.state.backgroundColor }}
                    value={this.state.input}>
                </input>
                <p>{this.state.input.length}</p>
            </>
        );
    }
}

export default PasswordStrength;