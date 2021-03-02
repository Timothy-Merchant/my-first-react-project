import { Component } from "react";

class RollCall extends Component {

    constructor(props) {

        super(props);

        const { names } = props;

        this.state = {
            nameIndex: 0,
            displayName: names[0],
            names: names
        };

        this.next = this.next.bind(this);
    }

    next() {

        if (this.state.nameIndex === this.state.names.length - 1) {
            this.setState({
                nameIndex: 0
            })
        } else {
            this.setState({ nameIndex: this.state.nameIndex + 1 })
        }

        this.setState({
            displayName: this.state.names[this.state.nameIndex],
        })
    }

    render() {

        return (
            <>
                <p>{this.state.displayName}</p>
                <button onClick={this.next}>Next</button>
            </>
        );
    }
}

export default RollCall;