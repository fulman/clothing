import React from "react";
import "./App.css";
import { Switch, Router } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Router exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
