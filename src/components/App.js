import '../style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About.js';
import Home from './Home.js';
import TeaShop from './TeaShop.js';
import FixedHeader from './FixedHeader.js';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-main">
          <FixedHeader />
          <ul className="App-links">
            <li>
              <Link to="/" className="App-link">HOME</Link>
            </li>
            <li>
              <Link to="/teaShop" className="App-link ">TEA</Link>
            </li>
            <li>
              <Link to="/accessories" className="App-link inner">ACCESSORIES</Link>
            </li>
            <li>
              <Link to="/sets" className="App-link ">TEA SETS</Link>
            </li>
            <li>
              <Link to="/about" className="App-link ">ABOUT</Link>
            </li>
            <li>
              <Link to="/locator" className="App-link">STORE LOCATOR</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/TeaShop">
              <TeaShop />
            </Route>
            <Route path="/accessories">
              <TeaShop />
            </Route>
            <Route path="/sets">
              <TeaShop />
            </Route>
            <Route path="/locator">
              <TeaShop />
            </Route>
            {/* will match everything so this path has to go last */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
