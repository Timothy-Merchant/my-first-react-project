import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = ({square}) => {
    return (
        <>
            <Header
                text="A cat, strutting its stuff!"
            />
            <Paragraph
                message="This is a message."
            />
            <People
                names={['name1', 'name2']}
            />
            { square ? <Square
                colour=""
            /> : null}
        </>
    );
};

export default Stuff;