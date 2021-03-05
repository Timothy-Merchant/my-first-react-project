import { Component } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

class Dates extends Component {

    constructor() {

        super()

        this.state = {
            startDate: new Date(),
            endDate: new Date()
        }

        this.setStartDate = this.setStartDate.bind(this)
        this.setEndDate = this.setEndDate.bind(this)
    }

    setStartDate(date) {
        this.setState({
            startDate: date
        })
    }

    setEndDate(date) {
        this.setState({
            endDate: date
        })
    }


    render() {
        return (
            <>
                <h1>Dates</h1>
                <DatePicker selected={this.state.startDate} onChange={this.setStartDate} />
                <DatePicker selected={this.state.endDate} onChange={this.setEndDate} />
                <div class="alert alert-primary" role="alert">
                    This is a primary alert—check it out!
                </div>
            </>
        )
    }
}

export default Dates;