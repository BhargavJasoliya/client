import React, { useState } from 'react';
import './LoginSignUp.css'; // Import the CSS file
import { login, clearErrors } from 'actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const LoginSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Username:', email);
        console.log('Password:', password);
        setEmail('');
        setPassword('');
        e.preventDefault();

        // const { data } = await axios.post(
        //     'http://localhost:5001/client/login',
        //     { email, password },
        //     config
        // );
        // console.log('Data in res ', data?.data);
        let bodyFormData = new FormData();
        bodyFormData.set('email', email);
        bodyFormData.set('password', password);
        axios({
            method: 'post',
            url: 'http://localhost:5001/client/login',
            data: { email, password },
            config: { headers: { 'Content-Type': 'application/json' } }
        })
            .then(function (response) {
                //handle success
                console.log("gbwbdjkbk", response);
                console.log("Status", response?.status);

                if (response?.status == 201) {
                    navigate("/login");
                }
                else {
                    localStorage.setItem('id', JSON.stringify(response.data.user?._id));
                    navigate("/dashboard");
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        // dispatch(login(email, password));
        console.log('Dhruv');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Username:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <div>Don't have an account? <a href='/signup'>sign up</a></div>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginSignUp;