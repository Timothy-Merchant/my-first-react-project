import { Component } from "react";

class Multiplier extends Component {

    render() {
        const { x, y } = this.props;

        return (
            <>
                <h1>Multiplier</h1>
                <p>{x * y}</p>
            </>
        )
    }
}

export default Multiplier;