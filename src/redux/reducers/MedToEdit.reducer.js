const medToUpdate = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MED_TO_UPDATE':
          return action.payload;
        case 'EDIT_MEDNAME_INPUT':
          return {...state, Medication_name: action.payload };
        case 'EDIT_MEDDESC_INPUT':
          return {...state, Medication_description: action.payload };
        case 'EDIT_MEDTIME_INPUT':
          return {...state, Time: action.payload };
        case 'EDIT_MEDDOSAGE_INPUT':
          return {...state, Dosage: action.payload };
        default:
          return state;
      }
    }
export default medToUpdate;