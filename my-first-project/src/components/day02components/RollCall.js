import { Component } from "react";

class RollCall extends Component {

    constructor(props) {

        super(props);

        this.state = {
            nameIndex: 0,
        };

        this.next = this.next.bind(this);
    }

    next() {

        this.state.nameIndex === this.props.names.length - 1 ?
            this.setState({ nameIndex: 0 }) :
            this.setState({ nameIndex: this.state.nameIndex + 1 })
    }

    render() {

        return (
            <>
                <p>{this.props.names[this.state.nameIndex]}</p>
                <button onClick={this.next}>Next</button>
            </>
        );
    }
}

export default RollCall;