import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Countdown from 'react-countdown';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch()
  const history = useHistory()

  const nameToUserInfo = () =>{
    history.push('/UserInformation');
    console.log('Userpage is ReRouting to the UserInfo page')
}

  useEffect(() => {
    dispatch({
      type: 'FETCH_USERDESC'
    })
    dispatch({
      type: 'FETCH_MEDS'
    })
    dispatch({
      type: 'FETCH_MED_TO_UPDATE',
      payload: userID
    })
  }, [])


  const user = useSelector((store) => store.user);
  const userDesc = useSelector((store) => store.userDesc[0])
  const userMeds = useSelector((store) => store.userMeds)
  const medToUpdate = useSelector((store) => store.medToUpdate)
  const TimerEnding = () => <span>💊Time to Take Your Medication !💊</span>
  const userID= user.id

  const updateMeds = (IdToUpdate, event) => {
    // event.preventDefault()
    
    console.log('Updating Medication')
    dispatch({
      type:'FETCH_MED_TO_UPDATE',
      payload: IdToUpdate
    })
    history.push(`/EditMedication/${IdToUpdate}`)
    console.log('user med id is:', IdToUpdate)
  }
  const deleteMeds =(idToDelete)=> {
    console.log('Deleting Medication')
    dispatch({
      type:'DELETE_MED',
      payload: idToDelete
    })
  }
  return (
    <div className="container">
      <h2 onClick={nameToUserInfo}>Welcome, {userDesc?.Name}!</h2>
      <p>Your ID is: {user.id}</p>
      <table>
      <thead>
        <tr>
          <th class = "flex-container">
            Medication Name
          </th>
          <th class = "flex-container">
            Medication Description
          </th>
          <th class = "flex-container">
            Medication Dosage
          </th>
          <th class = "flex-container">
            Medication Time
          </th>
          <th>
            Edit
          </th>
          <th>
            Remove
          </th>
        </tr>
        </thead>
        {userMeds.map(userMeds => {
          return (
              <tr key = {userMeds.id}>
                <td class = "box">
                  {userMeds?.Medication_name}
                </td>
                <td class = "box">
                  {userMeds?.Medication_description}
                </td>
                <td class = "box">
                  {userMeds?.Dosage}
                </td>
                <td class = "box">
                <Countdown date={
                  new Date(userMeds.Time).getTime()
                } 
                
                renderer={({ days, hours, minutes, seconds, completed }) => {
                  if (completed) {
                    return <TimerEnding />;
                  } else {
                    return (
                      <span>
                        {days} days {hours} hours {minutes} minutes {seconds} seconds
                      </span>
                    );
                  }
                }} />
                </td>
                <td>
                  <button onClick={() => updateMeds(userMeds.id)}>✍🏽 Edit </button>
                </td>
                <td>
                  <button onClick={() => deleteMeds(userMeds.id)} >🚮 Remove </button>
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
