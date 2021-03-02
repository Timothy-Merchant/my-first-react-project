import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = ({ square }) => {
    return (
        <>
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