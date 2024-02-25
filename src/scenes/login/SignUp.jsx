import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    // State to manage input values
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.post(
            'http://localhost:5001/client/registerUser',
            { name, email, password },
            config
        );
        // Add your sign-up logic here (e.g., API call, user creation)
        console.log('First Name:', name);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);


        // Reset form fields after submission
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
        navigate('/login');
    };

    return (
        <div className='main'>
            <div className='heading'>
                <h2>Sign Up</h2>
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                            className='text'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input
                            type="text"
                            className='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            className='text'
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
                            className='text'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
