import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/actors" component={Actors} />
      </div>
    </BrowserRouter>
  );
};

export default App;
