import React, { useState } from 'react';
import Nav from '../NAV/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddUser() {
    const history = useNavigate(); 
    const [inputs, setInputs] = useState({
        name: "",
        gmail: "",
        age: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('/userdetails'))
    };

    const sendRequest = async() =>{
        await axios.post("http://localhost:5000/users",{
            name: String(inputs.name),
            gmail: String(inputs.gmail),
            age: Number(inputs.age),
            address: String(inputs.address),
        }).then(res => res.data);
    }

    return (
        <div>
            <Nav />
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br />
                <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                />
                <br />

                <label>Gmail</label>
                <br />
                <input
                    type="email"
                    name="gmail"
                    value={inputs.gmail}
                    onChange={handleChange}
                />
                <br />

                <label>Age</label>
                <br />
                <input
                    type="number"
                    name="age"
                    value={inputs.age}
                    onChange={handleChange}
                />
                <br />

                <label>Address</label>
                <br />
                <input
                    type="text"
                    name="address"
                    value={inputs.address}
                    onChange={handleChange}
                />
                <br />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddUser;
