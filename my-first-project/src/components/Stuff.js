import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Basket from "./Basket";

const Stuff = ({ square }) => {
    return (
        <>
            {/* <Basket>
                {[
                    { name: "Coffee", price: 2.10 },
                    { name: "Bananas", price: 3.50 },
                    { name: "Milk", price: 250.65 },
                    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
                ]}
            </Basket> */}
            <Header>A special cat.</Header>
            <Paragraph>This is a message.</Paragraph>
            <People
                names={['name1', 'name2']}
            />
            { square ? <Square
                colour="red"
            /> : null}
        </>
    );
};

export default Stuff;