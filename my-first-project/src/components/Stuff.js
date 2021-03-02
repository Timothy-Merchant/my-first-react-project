import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./day02components/Clicked";
import ToggleText from "./day02components/ToggleText";
import Counter from "./day02components/Counter";
import StepCounter from "./day02components/StepCounter";
import CatchMeIfYouCan from "./day02components/CatchMeIfYouCan";

const Stuff = ({ square }) => {
    return (
        <>
            <CatchMeIfYouCan jump={100} />
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
            <StepCounter max={100} step={5} />
        </>
    );
};

export default Stuff;