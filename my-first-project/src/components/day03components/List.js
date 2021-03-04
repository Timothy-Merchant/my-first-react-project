// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

import { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            items: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({ value: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            value: "",
            items: [...this.state.items, this.state.value],
        });
    }

    render() {
        return (
            <>
                <h1>List</h1>
                <form onSubmit={this.handleSubmit} className="form-group mt-4">
                    <input className="form-control" onChange={this.handleChange} value={this.state.value} />
                    <button className="btn btn-primary mt-4">Add</button>
                </form>
                <ul className="list-group mt-4">
                    {this.state.items.map((item, i) => (
                        <li className="list-group-item" key={i}>{item}</li>
                    ))}
                </ul>
            </>
        );
    }
}
export default List;