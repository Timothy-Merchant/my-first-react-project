import { Component } from "react";

class TwoCounters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            originalTitle: "",
            value1: 0,
            value2: 0
        };

        this.handle1 = this.handle1.bind(this);
        this.handle2 = this.handle2.bind(this);
    }

    handle1() {
        this.setState({ value1: this.state.value1 + 1 });
    }

    handle2() {
        this.setState({ value2: this.state.value2 + 1 });
    }

    componentDidMount() {
        let title = window.document.title;
        this.setState({ originalTitle: title })
        window.document.title = this.state.value1 + this.state.value2;
    }

    componentDidUpdate() {
        window.document.title = this.state.value1 + this.state.value2;
    }

    componentWillUnmount() {
        window.document.title = this.state.originalTitle;
    }

    render() {

        return (
            <>
                <h1>TwoCounters</h1>
                <div className="jumbotron">
                    <p>
                        <button onClick={this.handle1} className="btn btn-lg btn-danger">+</button>
                        <span className="alert alert-danger mr-2 ml-2">{this.state.value1}</span>
                    </p>
                    <p>
                        <button onClick={this.handle2} className="btn btn-lg btn-success">+</button>
                        <span className="alert alert-success mr-2 ml-2">{this.state.value2}</span>
                    </p>
                </div>
            </>
        );
    }
}

export default TwoCounters;