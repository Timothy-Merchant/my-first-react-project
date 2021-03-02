import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./day02components/Clicked";
import ToggleText from "./day02components/ToggleText";
import Counter from "./day02components/Counter";

const Stuff = ({ square }) => {
    return (
        <>
            <Header>A special cat.</Header>
            <Paragraph>This is a message.</Paragraph>
            <People
                names={['name1', 'name2']}
            />
            { square ? <Square
                backgroundColor="hotpink"
            /> : null}
            <Clicked />
            <ToggleText initial="Hello" alternate="World" />
            <Counter initial={50} max={100} />
        </>
    );
};

export default Stuff;