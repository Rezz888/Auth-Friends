import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";
import AddFriends from "./components/AddFriends";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <h1> Login </h1>
          {/* <Link to="/protected">Friends List</Link> */}
          <Link to="/addFriends">Add a Friend</Link>
        </div>
        <Switch>
          <PrivateRoute path="/protected" component={Friends} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/addFriends" component={AddFriends} />
          {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
