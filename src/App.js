import React from "react"
import './App.css';
import Visualiser from "./Visualiser"
import About from "./About"
import Nav from "./Nav"
import ItemDetail from './ItemDetail'
import SignIn from "./SignIn"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/visualiser" exact component={Visualiser} />
          <Route path="/about"  component={About} />
          <Route path="/visualiser/:id" component={ItemDetail} />
          <Route path="/signIn" component={SignIn}/>
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
  )
  
}

export default App;
