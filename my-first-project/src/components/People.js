import { Component } from "react";

class People extends Component {

    handleClick() {
        console.log("Hello, world");
    }

    render() {

        let { names } = this.props;

        return (
            names.length > 0 ?
                <ul onClick={this.handleClick}>
                    {names.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul> : 'nothing to see here'
        );
    }
}

export default People;