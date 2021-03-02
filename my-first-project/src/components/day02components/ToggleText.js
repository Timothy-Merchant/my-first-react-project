import { Component } from "react";

class ToggleText extends Component {

    //  Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.

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