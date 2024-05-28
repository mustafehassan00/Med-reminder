import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import userDesc from './userDesc.reducer';
import userDescInput from './userDescInput.reducer';
import userMeds from './userMeds.reducer';
import userMedInput from './userMedInput.reducer'
import medToUpdate from './userMedsUpdate.reducer';
import deleteMeds from './userMedsDelete.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  userDesc, // contains our Users Description Data
  userDescInput, // contains our User Description's Input Data
  userMeds, // contains our User's Medication Data
  userMedInput, // contains our User's Medication Input Data
  medToUpdate, // contains our User's Updated Medication Data
  deleteMeds, // Allows user to delete Medication
});

export default rootReducer;
