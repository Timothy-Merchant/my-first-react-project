import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import List from "./components/day03components/List";
import Die from "./components/day02tricksy/Die";
import Footer from "./components/day04components/Footer";
import ThreeCounters from './components/day04components/ThreeCounters';
import FourOhFour from './components/day04components/FourOhFour';

const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/list">
            <List />
          </Route>
          <Route path="/die">
            <Die
              sides={6}
            />
          </Route>
          <Route path="/check">
            <ThreeCounters
            />
          </Route>
          <FourOhFour />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;
