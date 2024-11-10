import React, { useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = ({ setIsAuth }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (event) => {
        event.preventDefault();
        if (username==="saikumararava" && password === "$1HappyNewYear") {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
        } else {
            event.preventDefault();
            toast.error("Wrong credentials");
        }
    }
    return (
        <div className='login'>
            <Toaster/>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Username</label>
                <input className="loginInput" type="text" placeholder="Enter the username..."
                    onChange={(event) => {
                        setUsername(event.target.value)
                    }}
                />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter the password..."
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                <button className="loginButton" onClick={signIn}>Login</button>
            </form>
        </div>
    )
}

export default Login