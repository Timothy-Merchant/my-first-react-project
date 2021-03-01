const divStyle = {
    background: 'red',
    width: 200,
    height: 200,
};

const divStyleDefault = {
    width: 200,
    height: 200,
    background: 'blue',
};

const Square = ({ colour }) => (
    <div style={colour ? divStyle : divStyleDefault}></div>
);

export default Square;