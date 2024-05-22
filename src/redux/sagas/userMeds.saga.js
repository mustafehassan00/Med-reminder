import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserMedData(){
    try{
        const medResponse = yield axios.get('/api/userMeds');

        yield put({
            type:'SET_USERMEDS',
            payload: medResponse.data
        });
    }   catch (error) {
        console.log('Error in fetchUserMeds', error);
    }
}
function* fetchUserMedInputData(action){
    try{
        yield axios.post('/api/userMeds',action.payload);

        yield put ({
            type:'USERMED_INPUT',
        })
    }   catch (error){
        console.log('Error in fetchUserMedInput', error)
    }
}

function* userMedsSaga() {
    yield takeLatest('FETCH_MEDS', fetchUserMedData);
    yield takeLatest('FETCH_MEDINPUT', fetchUserMedInputData)
}
export default userMedsSaga;