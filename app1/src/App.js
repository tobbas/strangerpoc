import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">About</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <h1>111111111111111111111111111 {window.location.href}</h1>
              </Route>
              <Route exact path="/users" >
                <h1>111111 USSSERRRRSSS {window.location.href}</h1>
              </Route>
            </Switch>
          </div>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
