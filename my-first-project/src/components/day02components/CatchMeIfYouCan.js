import { Component } from "react";

class StepCounter extends Component {

    constructor(props) {

        super(props);

        const { jump } = props;

        this.state = {    
            scrollTo: 0,    
            currentPosition: 0,    
            jump: jump
        };

        this.jump = this.jump.bind(this);        
    }    

    jump() {

        this.setState({
            scrollTo: this.state.currentPosition + this.state.jump
        })        
        window.scrollBy(0 , this.state.scrollTo)
    }

    render() {

        return (
            <>                
                <button onClick={this.jump}>Jump!</button>                
            </>
        );
    }
}

export default StepCounter;