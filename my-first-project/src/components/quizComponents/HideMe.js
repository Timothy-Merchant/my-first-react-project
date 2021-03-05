import { Component } from "react";

class HideMe extends Component {

    constructor(props) {
        super(props)


        this.state = {
            display: "inline",
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            display: "none"
        })
    }

    render() {

        const content = this.props.children;

        return (
            <>
                <h1>Hide Me</h1>
                <p onClick={this.handleClick} style={{ ...this.state }}>{content}</p>
            </>
        )
    }

}

export default HideMe;