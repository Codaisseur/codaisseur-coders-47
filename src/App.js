import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
