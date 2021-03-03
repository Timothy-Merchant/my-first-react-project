import { Component } from "react";

// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

class Transform extends Component {

    constructor(props) {

        super(props);

        this.state = {
            result: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        let result = this.props.transform(e.currentTarget.value);        

        this.setState({
            result: result
        });
    }

    render() {

        return (
            <>
                <h1>Transform</h1>
                <input
                    type="number"
                    onChange={this.handleChange}>
                </input>
                <p>{this.state.result}</p>
            </>
        );
    }
}

export default Transform;