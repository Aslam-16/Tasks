import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./Navbar.css";
import Signup from "../Signup/Signup.js";
import Homepage from "../Homepage/Homepage.js";
import Login from "../Login/Login.js";

export default function Navbar() {

    return (
        <div className="container">
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                                       
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>            
        </div>
    );
}