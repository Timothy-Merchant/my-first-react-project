import { Component } from "react";

class ThreeCounters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: 0,
            value2: 0,
            value3: 0
        };

        this.handle1 = this.handle1.bind(this);
        this.handle2 = this.handle2.bind(this);
        this.handle3 = this.handle3.bind(this);
        this.getStoredValues = this.getStoredValues.bind(this);
    }

    handle1() {
        this.setState({ value1: this.state.value1 + 1 });
    }

    handle2() {
        this.setState({ value2: this.state.value2 + 1 });
    }

    handle3() {
        this.setState({ value3: this.state.value3 + 1 });
    }

    getStoredValues() {
        this.setState({
            value1: localStorage.getItem('value1'),
            value2: localStorage.getItem('value2'),
            value3: localStorage.getItem('value3'),
        })
    }

    componentWillMount() {
        this.setState({
            value1: JSON.parse(localStorage.getItem('value1')),
            value2: JSON.parse(localStorage.getItem('value2')),
            value3: JSON.parse(localStorage.getItem('value3')),
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('value1', JSON.stringify(nextState.value1))
        localStorage.setItem('value2', JSON.stringify(nextState.value2))
        localStorage.setItem('value3', JSON.stringify(nextState.value3))
    }

    componentWillUnmount() {
        localStorage.clear();
    }

    render() {

        return (
            <>
                <h1>ThreeCounters</h1>
                <div className="jumbotron">
                    <p>
                        <button onClick={this.handle1} className="btn btn-lg btn-danger">+</button>
                        <span className="alert alert-danger mr-2 ml-2">{this.state.value1}</span>
                    </p>
                    <p>
                        <button onClick={this.handle2} className="btn btn-lg btn-success">+</button>
                        <span className="alert alert-success mr-2 ml-2">{this.state.value2}</span>
                    </p>
                    <p>
                        <button onClick={this.handle3} className="btn btn-lg btn-primary">+</button>
                        <span className="alert alert-primary mr-2 ml-2">{this.state.value3}</span>
                    </p>
                </div>
            </>
        );
    }
}

export default ThreeCounters;