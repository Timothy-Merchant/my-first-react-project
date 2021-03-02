import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./day02components/Clicked";
import ToggleText from "./day02components/ToggleText";
import Counter from "./day02components/Counter";
import StepCounter from "./day02components/StepCounter";
import CatchMeIfYouCan from "./day02components/CatchMeIfYouCan";
import RollCall from "./day02components/RollCall";
import Colours from "./day02tricksy/Colours";
import Die from "./day02tricksy/Die";

const Stuff = ({ square }) => {
    return (
        <>
            <CatchMeIfYouCan jump={100} />
            <RollCall names={['name1', 'name2', 'name3']} />
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
            <Colours colours={[
                "#C14412",
                "#EBB31A",
                "#8F5318",
                "#009EAD",
                "#395967",
            ]} />
            <Die sides={6} />
        </>
    );
};

export default Stuff;