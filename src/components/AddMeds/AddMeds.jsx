import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Countdown from "react-countdown";

function AddMeds() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [medName, setMedName] = useState('')
    const [medDescription, setMedDescription] = useState('')
    const [medDosage, setMedDosage] = useState('')
    const [time, setTime] = useState('')

    const addMedication = (event) => {
        event.preventDefault()
        dispatch({
            type: 'FETCH_MEDINPUT',
            payload: {
                Medication_name: medName,
                Medication_description: medDescription,
                Dosage: medDosage,
                Time: time
         },
        })
        history.push('/user')
    }; // end adding medication

    return (
        <form onSubmit={addMedication}>
            <h2>Add Medication</h2>
            <div>
                <label>
                    Medication Name
                    <input
                        type="text"
                        name="Medication Name"
                        value={medName}
                        onChange={(event) => setMedName(event.target.value)}
                    />
                </label>
                <label>
                    Medication Description
                    <input
                        type="text"
                        name="Medication Description"
                        value={medDescription}
                        onChange={(event) => setMedDescription(event.target.value)}
                    />
                </label>
                <label>
                    Medication Dosage
                    <input
                        type="text"
                        name="Dosage"
                        value={medDosage}
                        onChange={(event) => setMedDosage(event.target.value)}
                    />
                </label>
                
                <label>
                    Time
                    <input
                        type="datetime-local"
                        name="Time"
                        value={time}
                        onChange={(event) => setTime(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <input
                    className="btn"
                    type="submit"
                    name="submit"
                    value="Add Medication"
                />
            </div>
        </form>
    )
}

export default AddMeds