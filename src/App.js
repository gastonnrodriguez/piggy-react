import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>        
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
