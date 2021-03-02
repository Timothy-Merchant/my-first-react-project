import { Component } from "react";

class ToggleText extends Component {


    constructor(props) {

        super(props);

        this.state = {
            message: this.props.initial
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.state.message === this.props.initial ?
            this.setState({
                ...this.state,
                message: this.props.alternate
            }) :
            this.setState({
                ...this.state,
                message: this.props.initial
            })
    }

    render() {

        return (
            <>
                <p>{this.state.message}</p>
                <button onClick={this.handleClick}>Toggle</button>
            </>
        );
    }
}

export default ToggleText;