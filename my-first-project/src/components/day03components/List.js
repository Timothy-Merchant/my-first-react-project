// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

import { Component } from "react";

class List extends Component {

    constructor(props) {

        super(props);

        this.state = {
            inputs: [],
            uniqueID: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {

        let inputs = [...this.state.inputs];
        inputs.push(
            <>
                <input key={this.state.uniqueID}></input>
                <br></br>
            </>
        );
        console.log(inputs)
        this.setState({ inputs, uniqueID: this.state.uniqueID + 1 });
    }

    render() {

        return (
            <>
                <h1>List</h1>
                <ul>
                    {this.state.inputs}
                </ul>
                <button onClick={this.handleClick}>Add</button>.
            </>
        );
    }
}

export default List;