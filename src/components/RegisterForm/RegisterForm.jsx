import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState('')
  const [userCondition, setUserCondition] = useState('')
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        Name: name,
        Bio: bio,
        Height: height,
        Weight: weight,
        Address: address,
        Age: age,
        user_condition: userCondition
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <p>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </p>
      </div>

      <div>
        <p>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="bio">
            Bio:
            <input
              type="text"
              name="bio"
              value={bio}
              required
              onChange={(event) => setBio(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="height">
            Height:
            <input
              type="text"
              name="height"
              value={height}
              required
              onChange={(event) => setHeight(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="weight">
            Weight:
            <input
              type="text"
              name="weight"
              value={weight}
              required
              onChange={(event) => setWeight(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="address">
            Address:
            <input
              type="text"
              name="address"
              value={address}
              required
              onChange={(event) => setAddress(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="age">
            Age:
            <input
              type="text"
              name="age"
              value={age}
              required
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="userCondition">
            User Conditon:
            <input
              type="text"
              name="userCondition"
              value={userCondition}
              required
              onChange={(event) => setUserCondition(event.target.value)}
            />
          </label>
        </p>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
