import React, { Component } from "react";
import "./App.css";
import Home from "../../pages/home";
import Saved from "../../pages/saved";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </BrowserRouter>
  );
}

export default App;
