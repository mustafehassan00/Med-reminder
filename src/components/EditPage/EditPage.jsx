import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import React, { useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect } from "react"
function EditPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const params= useParams()
    console.log('Params is:', params)

    const idToEdit = params.id
    console.log('IdtoEdit:', idToEdit)

    // const [medName, setMedName] = useState('')
    // const [medDescription, setMedDescription] = useState('')
    // const [medDosage, setMedDosage] = useState('')
    // const [time, setTime] = useState('')

    const medToedit = useSelector(store => store.medToUpdate)

    console.log('Med to Edit is:',medToedit)
   useEffect(() => {
    dispatch({
        type:'FETCH_MED_TO_UPDATE',
        payload:idToEdit,
    })
   },[])
    const editMed = () => {
        history.push('/user')
    }// end updating medication

    return (
        <form onSubmit={editMed}>
            <h2>Edit page</h2>
            <div>
                <label>
                    Medication Name:
                    <input 
                    type="text"
                    name="Medication Name"
                    value={medToedit.Medication_name}
                    // onChange={(event) => setMedName(event.target.value)} 
                    />
                </label>

                <label>
                    Medication Description:
                    <input 
                      type="text"
                      name="Medication Description"
                      value={medToedit.Medication_description}
                    //   onChange={(event) => setMedDescription(event.target.value)}
                      />
                </label>
                <label>
                    Dosage:
                    <input 
                    type="text"
                    name="Dosage"
                    value={medToedit.Dosage}
                    // onChange={(event) => setMedDosage(event.target.value)}
                    />
                </label>

                <label>
                    Time:
                    <input 
                    type="datetime-local"
                    name="Time"
                    value={medToedit.Time}
                    // onChange={(event) => setTime(event.target.value)}
                    />
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