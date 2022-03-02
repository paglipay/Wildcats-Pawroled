import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavTabs from './components/NavTabs'
import PerpPage from './components/PerpPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavTabs />
      <Router>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              {/* <NavTabs
          // authenticated={authenticated}
          // logout={logout}
        /> */}
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>

          </Route>
          <Route exact path={["/", "/perppage"]}>
            <PerpPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
