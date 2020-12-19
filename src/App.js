import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import IncomeForm from "./components/income/incomeForm";
import Categories from "./components/categories/categories";
const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>        
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/newincome">
          <IncomeForm />
        </Route>
        <Route path="/">
          <Login />
        </Route>
    
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
