import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/navbar/NavBar';
import { Home } from './components/home/Home';
import { Music } from './components/music/Music';
import { About } from './components/about/About';


function App() {
  return (
    <Router>
        <NavBar />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/music'><Music /></Route>
            <Route path='/about'><About /></Route>
          </Switch>
    </Router>
  );
}

export default App;
