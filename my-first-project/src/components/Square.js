const Square = ({ colour }) => (
    <div style={{
        background: colour,
        width: "200px",
        height: "200px",
    }}></div>
);

Square.defaultProps = {
    colour: 'red',
};

export default Square;