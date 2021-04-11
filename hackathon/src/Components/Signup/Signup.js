import React, {useState} from "react";
import Dashboard from "../Dashboard/Dashboard.js";
import "./Signup.css";
import axios from "axios";

const url = axios.create({
    base: "http://localhost:3200/"
});

export default function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(user);
        url.post("http://localhost:3200/signup", user)
        .then(alert("user registered"))
        .catch((err => {
            alert(err);
        }));
    }
    return (
        <>
            <form action="/signup" method="POST" className="signup-container" onSubmit={submit}>
                <h1>Signup</h1>
                <label>Name</label><br />
                <input type="text" id="name" name="name" onChange={e => { setUser({...user, name: e.target.value})}} required /><br />
                <label>Email ID</label><br />
                <input type="email" id="email" name="email" onChange={e => { setUser({...user, email: e.target.value})}} required /><br />
                <label>Password</label><br />
                <input type="password" id="password" name="password" onChange={e => { setUser({...user, password: e.target.value})}} required /><br />
                <button type="submit" className="signup-btn">Submit</button>
            </form>
        </>
    )
}