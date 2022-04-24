import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:"Invalid input",
        message: "Please enter a valid username and age"
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title:"Invalid input",
        message: "Please enter a age greater then zero"
      });
      return;
    }

    setEnteredUsername('');
    setEnteredAge('');

    props.onAddedUser({
      name: enteredUsername,
      age: enteredAge
    })
  }

  const usernameChangeHandler = event => setEnteredUsername(event.target.value);
  const ageChangeHandler = event => setEnteredAge(event.target.value);
  const dismisErrorHandler = event => setError(null);
  
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClick={dismisErrorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username:</label>
          <input id="userName" type="text" onChange={usernameChangeHandler} value={enteredUsername} />
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>);
};

export default AddUser;