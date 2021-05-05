import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllLeagues from './components/AllLeagues/AllLeagues';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound/NotFound';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <AllLeagues />
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail />
          </Route>
          <Route exact path="/">
            <AllLeagues />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
