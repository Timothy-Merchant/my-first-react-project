import Length from "./day03components/Length";
import PasswordStrength from "./day03components/PasswordStrength";
import TempConverter from "./day03components/TempConverter";
import List from "./day03components/List";
import Adder from "./day03components/Adder";
import Transform from "./day03components/Transform";

const Stuff2 = () => {
    return (
        <>
            <Length />
            <PasswordStrength />
            <TempConverter />
            <List />
            <Adder />
            <Transform transform={x => x * x} />
        </>
    );
};

export default Stuff2;