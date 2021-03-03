import { Component } from "react";

class LameGame extends Component {

    constructor(props) {

        super(props);

        this.state = {
            seconds: this.props.aim,
            elapsedTime: 0
        };

        this.tick = this.tick.bind(this);
        this.stop = this.stop.bind(this);
    }

    tick() {
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

    stop() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
                <br />
                <button onClick={this.tick}> Start </button>
                <button onClick={this.stop}> Now! </button>
            </div>
        );
    }
}

export default LameGame;