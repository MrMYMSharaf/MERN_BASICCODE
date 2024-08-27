import React from "react";
import './App.css';
import Home from './Components/Home/Home';
import { Route,Routes } from "react-router-dom";
import Users from "./Components/UserDetails/Users";
import AddUser from "./Components/Add User/AddUser";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/mainhome' element={<Home/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/userdetails' element={<Users/>}/>
          <Route path='/userdetails/:id' element={<UpdateUser/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
