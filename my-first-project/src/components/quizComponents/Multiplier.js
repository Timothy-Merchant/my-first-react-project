import { Component } from "react";

class Multiplier extends Component {

    render() {
        const { x, y } = this.props;

        return (
            <p>{x * y}</p>
        )
    }
}

export default Multiplier;