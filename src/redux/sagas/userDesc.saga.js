import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';


function* fetchUserDesc() {
    try{
        // Get User Description
        const userDescResponse= yield axios.get('/api/userDesc');

        yield put ({
            type:'SET_USERDESC',
            payload:userDescResponse.data
        });
        // Shows Errors for the function
    } catch (error){
        console.log('Error in fetchUserDesc', error);
    }
}

function* userDescSaga(){
    yield takeLatest('FETCH_USERDESC', fetchUserDesc);
}

export default userDescSaga;