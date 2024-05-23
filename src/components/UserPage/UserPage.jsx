import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'FETCH_USERDESC'
    })
    dispatch({
      type: 'FETCH_MEDS'
    })
  }, [])

  const user = useSelector((store) => store.user);
  const userDesc = useSelector((store) => store.userDesc[0])
  const userMeds = useSelector((store) => store.userMeds)

  

  return (
    <div className="container">
      <h2>Welcome, {userDesc?.Name}!</h2>
      <p>Your ID is: {user.id}</p>
      <table>
        <tr>
          <th>
            Medication Name
          </th>
          <th>
            Medication Description
          </th>
          <th>
            Medication Dosage
          </th>
          <th>
            Medication Time
          </th>
          <th>
            Remove
          </th>
        </tr>
        {userMeds.map(userMeds => {
          return (
              <tr>
                <td>
                  {userMeds?.Medication_name}
                </td>
                <td>
                  {userMeds?.Medication_description}
                </td>
                <td>
                  {userMeds?.Dosage}
                </td>
                <td>
                {userMeds?.Time}
                </td>
              </tr>
          )
        })}
      </table>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
