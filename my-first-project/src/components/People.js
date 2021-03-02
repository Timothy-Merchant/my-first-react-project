// let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = ({ names }) => (
    names.length > 0 ?
        <ul>
            {names.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul> : 'nothing to see here'
);

export default People;