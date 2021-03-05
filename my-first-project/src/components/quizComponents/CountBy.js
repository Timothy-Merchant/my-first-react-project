import { Component } from "react";

class CountBy extends Component {

    constructor(props) {
        super(props)

        this.state = {
            number: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            number: this.state.number + this.props.step
        })
    }

    render() {
        return (
            <>
                <h1>CountBy</h1>
                <p onClick={this.handleClick}>{this.state.number}</p>
            </>
        )
    }
}

export default CountBy;