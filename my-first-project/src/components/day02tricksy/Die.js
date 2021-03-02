import { Component } from "react";

class Die extends Component {


    constructor(props) {

        super(props);

        this.state = {
            width: "200px",
            height: "200px",
            backgroundColor: "grey",
            sides: this.props.sides,
            result: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        let random = Math.random(); // a number between 0 and 1
        let number = Math.floor(random * this.state.sides + 1); // a number between 0 and 99       
        this.setState({result: number});
    }

    render() {

        return (
            <>
                <div onClick={this.handleClick} style={{
                    ...this.state,
                    height: this.state.height,
                    width: this.state.width,
                    backgroundColor: this.state.backgroundColor
                }}>
                    <p>{this.state.result}</p>
                </div>
            </>
        );
    }
}

export default Die;