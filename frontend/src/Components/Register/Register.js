import React, { useState } from 'react';
import Nav from '../NAV/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
            .then(() => {
                alert("Register Success");
                navigate("/userdetails");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const sendRequest = async () => {
        return await axios.post("http://localhost:5000/register", {
            name: user.name,
            email: user.email,
            password: user.password,
        }).then(res => res.data);
    };

    return (
        <div>
            <Nav />
            <h1>New User Registration</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' value={user.name} name='name' onChange={handleInputChange} required /><br />

                <label>Email</label><br />
                <input type='email' value={user.email} name='email' onChange={handleInputChange} required /><br />

                <label>Password</label><br />
                <input type='password' value={user.password} name='password' onChange={handleInputChange} required /><br />

                <button type='submit'>Register</button>
            </form>
        </div>
    );
}

export default Register;
