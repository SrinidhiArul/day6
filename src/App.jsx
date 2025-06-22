/*function App(){
  let userList =[
    {name:"sri",age:25},
{name:"subi",age:19},
{name:"gokul",age:30},
{name:"giri",age:30},
  ]
  return (
    <ul>
    {
      userList.map((item ,index )=>
      {
        return <li key={index}>
          {item.name}
        </li>
      })
    }
</ul>
  )
}
export default App;

import {useState} from "react";
function App (){
let [count,setcount]=useState(0)
return {
  <div>
  <button onclick ={()=>(count+1)}>
  click

  }




  /*
  let [userList,setuserList]=useState([
    {name:'John',email:'Jonh@gmail.com',password:"123456"},
]
)
return (
 <>
          <input type="text" placeholder="Enter email" onClick={(e)=>setuserList([...userList,{name:e.target.value}])}/>
 <ul>
  {
    userList.map((user)=>(
      <li key={user.id}>
        {user.name}
      </li>
    ))
  }
 </ul>


 </>
)
}
export default App
*/
/*import {useState} from "react";
function App(){
  let [ count,setCount]=useState(0)
  return (
    <div>
      <button onClick ={() =>setCount(count+1)}>
    click
    </button>
    <h1>
        {count}
    </h1>
    </div>
  )
}
export default */
/*
import {useState}from "react";
function App(){
  let [userList,setUserlist]=useState([])
  return (
    <div className="from" action={setUserlist((e)=> 
    [...userList,{name:e.target.name.value.phone:e.target.phone.value}]}>
    <input type="Text"name="name"placeholder="Enter username" />
    <input 
  }
}
*/
/*import { StrictMode, useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, user]);
    setUser({ name: '', email: '', password: '' }); // Reset the form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
*/
import ListUser from "./ListUser.jsx";
function App(){
  return (
    <ListUser/>
  )
}
export default App