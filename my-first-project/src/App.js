import './App.css';
import Stuff from "./components/Stuff";
import Stuff2 from "./components/Stuff2";

const App = () => {
  return (
    <>
      <Stuff2 />
      <Stuff square={true} />
    </>
  );
};

export default App;
