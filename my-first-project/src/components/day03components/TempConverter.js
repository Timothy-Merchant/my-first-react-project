import { Component } from "react";

// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

class TempConverter extends Component {

    constructor(props) {

        super(props);

        this.state = {
            fInput: 0,
            cInput: 0,
        };

        this.handleFChange = this.handleFChange.bind(this);
        this.handleCChange = this.handleCChange.bind(this);
    }

    handleFChange(e) {
        
        
        let newEquation = (this.state.fInput - 32) * 5 / 9
        
        this.setState({
            fInput: e.currentTarget.value,
        });
        
        this.setState({
            cInput: newEquation
        })

        console.log(this.state.cInput)
        console.log(this.state.fInput)
    }

    handleCChange(e) {

        this.setState({ input: e.currentTarget.value });

        if (this.state.input.length > 16) {
            this.setState({ backgroundColor: "green" })
        } else if (this.state.input.length > 9) {
            this.setState({ backgroundColor: "orange" })
        } else if (this.state.input.length < 9) {
            this.setState({ backgroundColor: "red" })
        }

    }

    render() {

        return (
            <>
            <h1>TempConverter</h1>
                <input
                    onChange={this.handleFChange}
                    value={this.state.fInput}>
                </input>°F
                <br></br>
                <input
                    onChange={this.handleCChange}
                    value={this.state.cInput}>
                </input>°C
            </>
        );
    }
}

export default TempConverter;