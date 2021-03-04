import { Component } from "react";

class Square extends Component {

    constructor(props) {

        super(props);

        this.state = {
            width: "200px",
            height: "200px",
            backgroundColor: this.props.backgroundColor,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ ...this.state, 
            backgroundColor: this.props.backgroundColor 
        });
    }

    render() {

        return (
            <div onClick={this.handleClick} style={this.state}></div>
        );
    }
}

export default Square;