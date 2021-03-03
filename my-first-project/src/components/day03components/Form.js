// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

import { Component } from "react";

class Form extends Component {

    constructor(props) {

        super(props);

        this.state = {
            fields: [],
            label: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventdefault();

    }

    handleChange(e) {
        if (e.currentTarget.value === "") {
            this.setState({ label: <label>Field Required</label> })
        } else {
            this.setState({ label: "" })
        };
    }

    render() {

        return (
            <>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>{
                    this.props.fields.map((fieldName, i) =>
                        <>
                            <label>{fieldName}</label>
                            <br></br>

                            <input type={fieldName} onChange={this.handleChange}></input>
                            <br></br>
                            {this.state.label}
                            <br></br>
                        </>
                    )
                }
                    <button type="submit">Submit</button>.
                </form>
            </>
        );
    }
}

export default Form;