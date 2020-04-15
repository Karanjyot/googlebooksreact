import React, { Component, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState("harrypotter");
  const [search, setSearch] = useState([]);

  const book = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${books}&key=${process.env.key}`
      )
      .then((res) => {
        // console.log(res.data.items[0].volumeInfo.title);
        setSearch([res.data.items]);
      });
  };

  useEffect(() => {
    book();
  }, [books]);

  const render = search.map((item) => {
    return (
      <div>
        {item.map((book) => {
          return <li>{book.volumeInfo.title}</li>;
        })}
      </div>
    );
    // console.log(item);
    // return <li>{item.volumeInfo.title}</li>;
  });

  return (
    <div className="App">
      <Header />

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Google Book Search</h1>
          <p class="lead">Search for and Save Books of Interest!</p>
        </div>
      </div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-5">Book Search</h1>
          <p class="lead">Book</p>
          <input
            onChange={(event) => {
              setBooks(event.target.value);
            }}
          />
        </div>
      </div>

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <ul>{render}</ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
