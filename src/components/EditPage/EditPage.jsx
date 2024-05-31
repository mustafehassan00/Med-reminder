import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import React, { useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect } from "react"
function EditPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams()
    // console.log('Params is:', params)

    const idToEdit = params.id
    // console.log('IdtoEdit:', idToEdit)

    const medToedit = useSelector(store => store.medToUpdate)

    const handleMedNameChange = (event) => {
        event.target.value
        dispatch({
            type:'EDIT_MEDNAME_INPUT',
            payload: event.target.value
        })

    }
    const handleMedDescriptionChange = (event) => {
        event.target.value
        dispatch({
            type:'EDIT_MEDDESC_INPUT',
            payload: event.target.value
        })


    }
    const handleMedDosageChange = (event) => {
        event.target.value
        dispatch({
            type:'EDIT_MEDDOSAGE_INPUT',
            payload: event.target.value
        })

    }
    const handleMedTimeChange = (event) => {
        event.target.value
        dispatch({
            type:'EDIT_MEDTIME_INPUT',
            payload: event.target.value
        })

    }
   
    // console.log('Med to Edit is:', medToedit)
    useEffect(() => {
        dispatch({
            type:'FETCH_MED_TO_UPDATE',
            payload: idToEdit,
        })
    }, [])
    const editMed = () => {
       
        dispatch({
            type: 'UPDATE_MED',
            payload: medToedit
        })
        
        history.push('/user')
    }// end updating medication

    return (
        <form onSubmit={editMed}>
            <h2>Edit page</h2>
            <div>
                <label>
                    Medication Name:
                    {
                        medToedit.Medication_name &&
                        <input
                            type="text"
                            name="Medication Name"
                            value={medToedit.Medication_name}
                            onChange={handleMedNameChange}
                        />
                    }
                </label>

                <label>
                    Medication Description:
                    {
                        medToedit.Medication_description &&
                        <input
                            type="text"
                            name="Medication Description"
                            value={medToedit.Medication_description}
                            onChange={handleMedDescriptionChange}
                        />
                    }
                </label>
                <label>
                    Dosage:
                    {
                        medToedit.Dosage &&
                        <input
                            type="text"
                            name="Dosage"
                            value={medToedit.Dosage}
                            onChange={handleMedDosageChange}
                        />
                    }
                </label>

                <label>
                    Time:
                    {
                        medToedit.Time &&
                        <input
                            type="datetime-local"
                            name="Time"
                            value={medToedit.Time}
                            onChange={handleMedTimeChange}
                        />
                    }
                </label>
            </div>
            <div>
                <input
                    className="btn"
                    type="submit"
                    name="submit"
                    value="Edit Medication"
                />
            </div>
        </form>
    )
}

export default EditPage