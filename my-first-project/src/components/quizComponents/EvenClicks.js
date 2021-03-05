import { Component } from "react";

class EvenClicks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({ clicks: this.state.clicks + 1 })
    }

    render() {

        const { clicks } = this.state;

        return (
            <>
                <h1>EvenClicks</h1>
                <p>{clicks}</p>
                <p>{clicks % 2 === 0 ? "Even" : "Odd"}</p>
                <button onClick={this.handleClick}>Click Me</button>
            </>
        )
    }
}

export default EvenClicks;