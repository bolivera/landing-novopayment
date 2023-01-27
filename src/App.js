import React from "react";
import logo from './logo.svg';
import './App.scss';
import Header from './components/shared/Header';
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <React.Fragment>
    <Header />
    <Home/>
    <Footer />
  </React.Fragment>
  );
}

export default App;
