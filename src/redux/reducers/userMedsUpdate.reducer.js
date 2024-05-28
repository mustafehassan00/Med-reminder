const medToUpdate = (state = [], action) => {
    switch (action.type) {
        case 'SET_MED_TO_UPDATE':
            return action.payload;
        default:
            return {
                ...state,
                Medication_name: action.payload,
                Medication_description: action.payload,
                Dosage: action.payload,
                Time: action.payload
            }
    }
}
export default medToUpdate;