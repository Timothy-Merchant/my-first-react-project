import { Component } from "react";
import { Button, ProgressBar } from "react-bootstrap";

class Progress extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: 0,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let { value } = this.state;

        this.setState({
            value: value < 100 ? value + 10 : value,
        })
    }

    render() {

        const { value } = this.state;

        return (

            <>
                <h1>Progress</h1>
                <ProgressBar
                    animated
                    now={value}
                    label={`${value}%`}
                />
                <Button
                    variant="warning"
                    onClick={this.handleClick}
                >More!</Button>
            </>
        )
    }
}

export default Progress;