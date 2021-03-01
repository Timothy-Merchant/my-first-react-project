// let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = ({names}) => (
    <ul>
        { names.length > 0 ? names.map((value, index) => (
            <li key={index}>{value}</li>
        )) : 'nothing to see here'
        }
    </ul>
);

export default People;