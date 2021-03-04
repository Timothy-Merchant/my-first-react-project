import { Link } from "react-router-dom";

const Footer = () => (
    <ul className="list-group">
        <li className="list-group-item">
            <Link to="/list">Do a list thingy</Link>
        </li>
        <li className="list-group-item">
            <Link to="/die">Roll a six sided die</Link>
        </li>
        <li className="list-group-item">
            <Link to="/check">Press three counter buttons</Link>
        </li>
    </ul>
);

export default Footer;