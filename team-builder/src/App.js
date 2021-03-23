import './App.css';
import Form from '../src/Form';
import React, { useState } from "react"

function App() {
  const friendsList = [
    {name: 'Irving',
     email: 'elmorsudo@gmail.com',
    role: 'military'
  },
  {
    name: "chandler",
    email: "ChandlerBing@gmail.com",
    role: "simp master"
  }
  ]

  const defaultFriend = {
    name: '',
    email: '',
    role: ''
  }
  const [ newFriend, setNewFriend ] = useState(defaultFriend)
  const [ list, setList] = useState(friendsList)

  const submitHandler = e => {
      console.log('Firing')
      setList([...list, newFriend])
      e.preventDefault();
  }

  const newFriendHandler = e => {
    setNewFriend({...newFriend, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h1>Join the List of Team Members</h1>
      <Form list={list} update={newFriendHandler}  submit={submitHandler}/>     
    </div>
  );
}

export default App;
