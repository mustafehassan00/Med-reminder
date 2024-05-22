import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function AddMeds() {
    const dispatch = useDispatch()

    const [medName, setMedName] = useState('')
    const [medDescription, setMedDescription] = useState('')
    const [medDosage, setMedDosage] = useState('')

    const addMedication = (event) => {
        event.preventDefault();

        dispatch({
            type: 'FETCH_MEDINPUT',
            payload: {
                Medication_name: medName,
                Medication_description: medDescription,
                Dosage: medDosage
            },
        });
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