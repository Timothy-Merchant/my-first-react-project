import { Component } from "react";

import { Form } from "react-bootstrap";

class PasswordStrength extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({ value: value });
    }

    calculateColor(length) {
        if (length < 9) {
            return "red";
        } else if (length < 16) {
            return "orange";
        }

        return "green";
    }

    calculateBackground() {
        let length = this.state.value.length;

        return length === 0 ? {} : {
            background: this.calculateColor(length)
        };
    }

    render() {
        let { value } = this.state;
        let style = this.calculateBackground();

        return (
            <>
                <h1>Password Strength</h1>
                <Form className="mt-4">
                    <Form.Control
                        style={style}
                        className="form-control"
                        onChange={this.handleChange}
                        value={value}
                    />
                </Form>
            </>
        );
    }
}

export default PasswordStrength;