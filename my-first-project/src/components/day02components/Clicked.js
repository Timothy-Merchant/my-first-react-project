import { Component } from "react";

class Clicker extends Component {

    constructor(props) {

        super(props);

        this.state = {
            clicked: "not clicked",
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: "clicked" });
    }

    render() {

        return (
            <p onClick={this.handleClick}>{this.state.clicked}</p>
        );
    }
}

export default Clicker;