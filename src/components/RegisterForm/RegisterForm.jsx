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
      },
    });
    dispatch({
      type: 'FETCH_USERDESCINPUT',
      payload: {
       name: name,
       bio: bio,
       height: height,
       weight: weight,
       address: address,
       age: age,
       userCondition: userCondition
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
          <label>
            Name:
            <input
              type="text"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Bio:
            <input
              type="text"
              value={bio}
              required
              onChange={(event) => setBio(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Height:
            <input
              type="text"
              value={height}
              required
              onChange={(event) => setHeight(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Weight:
            <input
              type="text"
              value={weight}
              required
              onChange={(event) => setWeight(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Address:
            <input
              type="text"
              value={address}
              required
              onChange={(event) => setAddress(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Age:
            <input
              type="text"
              value={age}
              required
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            User Conditon:
            <input
              type="text"
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
