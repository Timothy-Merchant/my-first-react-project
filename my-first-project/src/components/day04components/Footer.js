import { Link } from "react-router-dom";
import { Component } from "react";

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            max: 0,
            step: 0,
        };

        this.handleStep = this.handleStep.bind(this);
        this.handleMax = this.handleMax.bind(this);
    }

    handleStep(e) {
        this.setState({ step: e.currentTarget.value });
    }

    handleMax(e) {
        this.setState({ max: e.currentTarget.value });
    }

    render() {

        const { max, step } = this.state;
        let finalPath = `/steps/${max}/${step}`;

        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/list">Do a list thingy</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/die">Roll a six sided die</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/check">Press three counter buttons</Link>
                </li>
                <li className="list-group-item">
                    <label>Max</label>
                    <input type="number" onChange={this.handleMax} value={max}></input>
                    <br></br>
                    <label>Step</label>
                    <input type="number" onChange={this.handleStep} value={step}></input>
                    <br></br>
                    <Link to={finalPath}>Make a step counter</Link>
                </li>
            </ul>
        )
    }

}

export default Footer;