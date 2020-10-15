import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Search from './Components/Search/Search';
import Forecast from './Components/Results/Forecast';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/forecast/:city">
            <Forecast />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
