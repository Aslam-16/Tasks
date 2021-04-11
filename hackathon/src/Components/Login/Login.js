import React, {useState} from "react";
import "./Login.css";
import Dashboard from "../Dashboard/Dashboard.js";
import axios from "axios";

const url = axios.create({
    base: "http://localhost:3200/"
});

export default function Login() {
    const [cred, setCred] = useState({
        email: "",
        password: ""
    });
    
    const submit = (e) => {
    e.preventDefault();
    
        console.log(cred);
        url.post("http://localhost:3200/login", cred)
        .then(alert("Logged In"))
        .catch((err => {
            alert(err);
        }));
};

    return (
        <div className="login-container">
            <form onSubmit={submit}>
                <h1>Login</h1>
                <label>Email ID</label><br />
                <input type="text" id="email" name="email" onChange={(e)=>setCred({...cred, email:e.target.value})} required /><br />
                <label>Password</label><br />
                <input type="password" id="password" name="password" onChange={(e)=>setCred({...cred, password:e.target.value})} required /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}