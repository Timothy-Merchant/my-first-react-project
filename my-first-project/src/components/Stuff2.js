import Length from "./day03components/Length";
import PasswordStrength from "./day03components/PasswordStrength";
import TempConverter from "./day03components/TempConverter";
import List from "./day03components/List";
import Adder from "./day03components/Adder";
import Transform from "./day03components/Transform";
import Form from "./day03components/Form";
import GodCounter from "./day03components/GodCounter";
import TwoCounters from "./day03components/TwoCounters";
import LightBox from "./day04components/LightBox";
import Timer from "./day04components/Timer";
import ThreeCounters from "./day04components/ThreeCounters";

const Stuff2 = () => {
    return (
        <>
            <Length />
            <PasswordStrength />
            <TempConverter />
            <List />
            <Adder />
            <Transform transform={x => x * x} />
            <Form fields={['one', 'two', 'three']} />
            <GodCounter />
            <TwoCounters />
            <LightBox src={"/avatar.png"} />
            <Timer start={3} />
            <ThreeCounters />
        </>
    );
};

export default Stuff2;