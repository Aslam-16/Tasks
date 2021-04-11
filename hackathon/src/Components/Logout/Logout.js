import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import Login from "../Login/Login.js";

export default function Logout() {
    return (
        <div>
            <h3>
                Successfully Logged out
            </h3>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                                       
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>            
        </div>
    )
}