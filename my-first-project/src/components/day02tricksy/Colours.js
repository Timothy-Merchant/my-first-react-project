import { Component } from "react";

class Colours extends Component {


    constructor(props) {

        super(props);

        this.state = {
            width: "200px",
            height: "200px",
            backgroundColor: this.props.colours[0],
            colourIndex: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.state.colourIndex === this.props.colours.length - 1 ?
            this.setState({ colourIndex: 0 }) :
            this.setState({ colourIndex: this.state.colourIndex + 1 })        
    }

    render() {

        return (
            <div onClick={this.handleClick} style={{
                ...this.state, backgroundColor: this.props.colours[this.state.colourIndex]
            }}></div>
        );
    }
}

export default Colours;