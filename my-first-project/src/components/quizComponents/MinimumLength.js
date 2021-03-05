import { Component } from "react";


class MinimumLength extends Component {

    constructor(props) {

        super(props)

        this.state = {
            length: 0
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        this.setState({ length: e.currentTarget.value.length })
        console.log(this.props.length);
        console.log(this.state.length);
    }

    render() {

        return (
            <>
                <h1>Minimum Length</h1>
                <p>{this.state.length < this.props.length ? "Too short!" : ""}</p>
                <input type="text" onChange={this.handleInput}></input>
            </>
        )
    }

}

export default MinimumLength