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
import Square from './components/Square';
import StepCounter from './components/day02components/StepCounter';

// /squares/:colour

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
          <Route path="/squares/:backgroundColor" render={({ match }) => (
            <Square backgroundColor={match.params.backgroundColor} />
          )} />
          <Route path="/steps/:max/:step" render={({ match }) => (
            <StepCounter max={match.params.max} step={match.params.step} />
          )} />
          <FourOhFour />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;
