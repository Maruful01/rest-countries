import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import Details from './components/Details/Details';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/home">
       <Home/>
      </Route>

      <Route exact path="/">
       <Home/>
      </Route>

      <Route exact path="/country/:countryName">
       <Details/>
      </Route>

      <Route path="*">

       </Route>
    </Switch>
    </Router>
  );
}

export default App;
