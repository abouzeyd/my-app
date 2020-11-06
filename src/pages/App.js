import React, { Fragment } from "react";
import "../css/App.css";
import "../css/Form.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "../components/Layout";
import NavigationBar from "../components/NavigationBar";
import Form from "./Form";
import SignIn from "./SignIn";
import About from "./About";
import Views from "./Views";
import ItemDetail from "./ItemDetail";
import Nomatch from "./Nomatch";

function App() {
  return (
    <Fragment>
      <Layout>
        <Router>
          <NavigationBar />
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/views" exact component={Views} />
              <Route path="/about" component={About} />
              <Route path="/views/:id" component={ItemDetail} />
              <Route path="/form" component={Form} />
              <Route path="/nomatch" component={Nomatch} />
              <Route path="/signIn" component={SignIn} />
            </Switch>
          </div>
        </Router>
      </Layout>
    </Fragment>
  );
}
const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home</h1>
    </div>
  );
};

export default App;
