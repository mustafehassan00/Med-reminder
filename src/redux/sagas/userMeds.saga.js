import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserMedData() {
    try {
        const medResponse = yield axios.get('/api/userMeds');

        yield put({
            type: 'SET_USERMEDS',
            payload: medResponse.data
        });
    } catch (error) {
        console.log('Error in fetchUserMeds', error);
    }
}
function* fetchUserMedInputData(action) {
    try {
        yield axios.post('/api/userMeds', action.payload);

        yield put({
            type: 'USERMED_INPUT',
        })
    } catch (error) {
        console.log('Error in fetchUserMedInput', error)
    }
}
function* fetchUpdateUserMeds(action){
   try{
        const medID = action.payload
       const response = yield axios.get(`/api/userMeds/${medID}`);

        const medToUpdate= response.data
        console.log('Medication to update id is:' ,medToUpdate)

        yield put({
            type:'SET_MED_TO_UPDATE',
            payload:medToUpdate
        })
    } catch (error) {
        console.log('Error in fetchUpdateUserMeds:', error)
    } 
}

function* UpdateUserMeds(action) {
    try{
        const editedMedId = action.payload
        console.log('Edited Medication Id is:', editedMedId)
        yield axios ({
            method: 'PUT',
            url: `/api/userMeds/${editedMedId}`,
        })
        yield put ({
            type: 'FETCH_MEDS'
        })
    } catch (err) {
        console.log('Error in UpdateUserMeds', err)
    }

}

function* deleteUserMeds(action) {
    try{
        const deleteMedId = action.payload
        console.log('Action payload is', action.payload)
        yield axios ({
            method:'DELETE',
            url: `/api/userMeds/${deleteMedId}`
           
        })
        yield put({
            type:'FETCH_MEDS'
        })
    } catch (err) {
        console.log('Error In Delete Saga', err)
    }
}

function* userMedsSaga() {
    yield takeLatest('FETCH_MEDS', fetchUserMedData);
    yield takeLatest('FETCH_MEDINPUT', fetchUserMedInputData);
    yield takeLatest('FETCH_MED_TO_UPDATE', fetchUpdateUserMeds);
    yield takeLatest('UPDATE_MED', UpdateUserMeds);
    yield takeLatest('DELETE_MED', deleteUserMeds);
}
export default userMedsSaga;