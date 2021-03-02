import { Component } from "react";

class Die extends Component {


    constructor(props) {

        super(props);

        this.state = {
            width: "200px",
            height: "200px",
            backgroundColor: "grey", 
            display: "flex",  
            justifyContent: "center", 
            alignItems: "center",   
            fontSize: "150px",        
            sides: this.props.sides,
            result: 0
        };

        this.roll = this.roll.bind(this);
    }

    roll() {

        let random = Math.random(); 
        let number = Math.floor(random * this.state.sides + 1);
        this.setState({ result: number });
    }

    render() {

        return (
            <>
                <div onClick={this.roll} style={{ ...this.state }}>
                    <p>{this.state.result}</p>
                </div>
            </>
        );
    }
}

export default Die;