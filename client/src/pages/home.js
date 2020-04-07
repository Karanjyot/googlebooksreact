import React, { Component } from "react";
import Header from "../components/Header/Header";

function Home() {
  return (
    <div className="App">
      <Header />

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Google Book Search</h1>
          <p class="lead">Search for and Save Books of Interest</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
