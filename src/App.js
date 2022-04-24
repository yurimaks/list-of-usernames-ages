import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsers] = useState([]);

  const addUserHandler = data => 
  {
    setUsers((prevList) => {
      return [...prevList, {
        id: Math.random(),
        name:data.name,
        age:data.age
      }];
    });
  }

  return (
    <div>
      <AddUser onAddedUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
