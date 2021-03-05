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
import Progress from './components/day05components/Progress';
import CatchMeIfYouCan from './components/day05components/CatchMeIfYouCan';
import PasswordStrength from './components/day05components/PasswordStrength';
import Dates from './components/day05components/Dates';
import LightsOut from './components/day05components/LightsOut';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'
import TempConverter from './components/day05components/TempConverter';
// import ProgressBar from 'react-bootstrap/ProgressBar'
// import Button from 'react-bootstrap/Button';

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
            <Footer />
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
          <Route path="/prebuilt">
            <Progress />
            <CatchMeIfYouCan jump={100} />
            <PasswordStrength />
            <List />
            <TempConverter />
            <Dates />
            <LightsOut />
          </Route>
          <FourOhFour />
        </Switch>
      </>
    </Router>
  );
};

export default App;
