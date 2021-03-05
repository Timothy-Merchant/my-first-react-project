import { Component } from 'react';
import { Button } from "react-bootstrap";

class CatchMeIfYouCan extends Component {

    constructor(props) {
        super(props)

        this.state = {

            top: 0,
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            top: this.state.top + this.props.jump
        })
    }

    render() {
        return (
            <>
                <h1>Catch me if you can</h1>
                <Button
                    className="btn btn-primary"
                    style={{ position: "relative", top: this.state.top + "px" }}
                    onClick={this.clickHandler} >CatchMe</Button>
            </>

        )
    }

}

CatchMeIfYouCan.defaultProps = {
    jump: 100,
};

export default CatchMeIfYouCan;