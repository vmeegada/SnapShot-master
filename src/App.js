import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
      <div className="container">
        <Header handleSubmit={this.handleSubmit} />
        <Routes>
          <Route path="/" element={<Navigate to="/mountain" />} />
          <Route path="/mountain" element={<Item searchTerm="mountain" />} />
          <Route path="/beach" element={<Item searchTerm="beach" />} />
          <Route path="/bird" element={<Item searchTerm="bird" />} />
          <Route path="/food" element={<Item searchTerm="food" />} />
          <Route path="/search/:searchInput" element={<Search />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </PhotoContextProvider>
    );
  }
}

export default App;
