import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function UpdateUser() {

  const[inputs,setInputs]=useState({})
  const history = useNavigate();
  const id = useParams().id;

  useEffect(()=>{
    const fetchHandler = async()=>{
      await axios .get(`http://localhost:5000/users/${id}`)
      .then((res)=>res.data)
      .then((data)=>setInputs(data.user));
    };
    fetchHandler();
  },[id]);

  const sendRequest = async ()=>{
    await axios .put(`http://localhost:5000/users/${id}`,{
      name: String(inputs.name),
            gmail: String(inputs.gmail),
            age: Number(inputs.age),
            address: String(inputs.address),
          }).then(res => res.data);
  }

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

  return (
    <div>
      <h1>Update User</h1>
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
  )
}

export default UpdateUser