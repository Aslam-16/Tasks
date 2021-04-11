import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./Navbar.css";
import Signup from "../Signup/Signup.js";
import Homepage from "../Homepage/Homepage.js";
import CustomPizza from "../CustomPizza/CustomPizza.js";
import Dashboard from "../Dashboard/Dashboard";
import Checkout from "../Checkout/Checkout.js";
import Logout from "../Logout/Logout.js";

export default function Navbar() {
    const [cartItem, setCartItem] = useState([{
        name: "",
        price: ""
    }]);

    return (
        <div className="container">
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/dashboard">Home</Link>
                        </li>
                        <li>
                            <Link to="/custom-pizza">Custom Pizza</Link>
                        </li>
                        <li>
                            <Link to="/checkout">Checkout</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                                       
                    <Switch>
                        <Route exact path="/dashboard">
                            <Dashboard cartItem={cartItem} setCartItem={setCartItem} />
                        </Route>
                        <Route path="/custom-pizza">
                            <CustomPizza />
                        </Route>
                        <Route path="/checkout">
                            <Checkout cartItem={cartItem} />
                        </Route>
                        <Route path="/logout">
                            <Logout />
                        </Route>
                    </Switch>
                </div>
            </Router>            
        </div>
    );
}