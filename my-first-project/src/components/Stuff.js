import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./day02components/Clicked";

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
            <Clicked />
        </>
    );
};

export default Stuff;