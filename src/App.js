import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Welcome to the checkout page!</h1>
          </Route>
          
          <Route path="/">
            <Header />
            <Home />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
