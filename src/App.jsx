import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import WeatherCont from './Components/Search/WeatherCont';
import Forecast from './Components/Results/Forecast';
import { GlobalStyle } from './App.style';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <WeatherCont />
          </Route>
          <Route path="/forecast/:city" title="Extended Forecast">
            <Forecast />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
