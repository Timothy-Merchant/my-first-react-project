import { Component } from "react";
import { Form } from "react-bootstrap";

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

        let celcius = (e.currentTarget.value - 32) * 5 / 9

        this.setState({
            fInput: e.currentTarget.value,
            cInput: celcius
        });
    }

    handleCChange(e) {

        let fahrenheit = (this.state.cInput + 32) * 5 / 9

        this.setState({
            cInput: e.currentTarget.value,
            fInput: fahrenheit
        });
    }

    render() {

        return (
            <>
                <h1>TempConverter</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Celsius</Form.Label>
                        <Form.Control
                            type="number"
                            className="form-control"
                            onChange={this.handleCChange}
                            value={this.state.cInput}
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label>Fahrenheit</Form.Label>
                        <Form.Control
                            type="number"
                            className="form-control"
                            onChange={this.handleFChange}
                            value={this.state.fInput}
                        />
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default TempConverter;