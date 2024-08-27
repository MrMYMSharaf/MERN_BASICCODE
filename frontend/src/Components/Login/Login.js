import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../NAV/Nav';

function Login() {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await sendRequest();
            if(response.status ==="ok"){
               alert("Login Success");
               history("/userdetails");
            }else{
                alert("Login error");
            }
        }catch(err){
            alert("error"+ err.message);
        }
    };

    const sendRequest = async () => {
        return await axios.post("http://localhost:5000/Login", {
            email: user.email,
            password: user.password,
        }).then(res => res.data);
    };

  return (
    <div>
        <Nav/>
        <h1>New User Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input type='email' value={user.email} name='email' onChange={handleInputChange} required /><br />

                <label>Password</label><br />
                <input type='password' value={user.password} name='password' onChange={handleInputChange} required /><br />

                <button type='submit'>Login</button>
            </form>
    
    
    
    </div>
  )
}

export default Login