import React from "react";
import "./App.css";
import Views from "./Views";
import About from "./About";
import Nav from "./Nav";
import ItemDetail from "./ItemDetail";
import Form from "./Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/views" exact component={Views} />
          <Route path="/about" component={About} />
          <Route path="/views/:id" component={ItemDetail} />
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default App;
