import { Component } from 'react';


class LightBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lightBoxOn: false,
        };

        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleWindowClick = this.handleWindowClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.handleWindowClick)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleWindowClick)
    }

    handleWindowClick(e) {
        this.setState({
            lightBoxOn: false
        })
    }

    handleImageClick(e) {
        e.stopPropagation();
        this.setState({
            lightBoxOn: true
        })
    }

    render() {

        let divStyle = {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.8)",
        }

        let lightBoxStyle = {            
            width: "30%",            
        };

        let defaultStyle = {            
            width: "30px",            
        };

        return (
            <>
                <h1>LightBox</h1>
                <div style={this.state.lightBoxOn ? { ...divStyle } : {}}>
                    <img onClick={this.handleImageClick} src={this.props.src} style={this.state.lightBoxOn ? { ...lightBoxStyle } : { ...defaultStyle }} alt="rodland"></img>
                </div>
            </>
        );
    }

}

export default LightBox;