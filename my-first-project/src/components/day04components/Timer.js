import { Component } from 'react';


class Timer extends Component {


    constructor(props) {

        super(props);

        this.state = {
            seconds: this.props.start,
        };
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            if (this.state.seconds === 0) {
                clearInterval(this.interval);
            } else {
                this.setState(prevState => ({
                    seconds: prevState.seconds - 1
                }));
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h1>Timer</h1>
                Seconds: {this.state.seconds}
                <br />
            </div>
        );
    }
}


export default Timer;