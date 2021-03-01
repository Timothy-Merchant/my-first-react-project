// let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = (props) => (
    <ul>
        { props.names.length > 0 ? props.names.map((value, index) => (
            <li key={index}>{value}</li>
        )) : 'nothing to see here'
        }
    </ul>
);

export default People;