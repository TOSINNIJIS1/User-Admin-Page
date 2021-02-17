import './App.css';
import Zindex from './train/z-index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './navbar/nav';
import Home from './pages/landingPage/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' render={() => <Home /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
