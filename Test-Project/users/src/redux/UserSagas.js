import { take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects";
import { loadUserSuccess, loadUserError, CreateUserSuccess, CreateUserError, DeleteUserSuccess, DeleteUserError, UpdateUserSuccess, UpdateUserError } from "./Action";
import { CreateUserApi, DeleteUserApi, loadUserApi, UpdateUserApi } from "./Api";
import * as types from "./ActionType";
 function* onLoadUserStartAsynch() {
try {
    const  response =yield call(loadUserApi);
    if(response.status===200){
        yield delay(500);
        yield put(loadUserSuccess(response.data));
    }
} catch (error) {
    yield put(loadUserError(error.response.data));
}
}

 function* onCreateUserStartAsynch({payload}) {
    try {
        const  response =yield call(CreateUserApi,payload);
        if(response.status===200){
            yield delay(500);
            yield put(CreateUserSuccess(response.data));
        }
    } catch (error) {
        yield put(CreateUserError(error.response.data));
    }
    }
    function* onDeleteUserStartAsynch(id) {
        try {
            const  response =yield call(DeleteUserApi,id);
            if(response.status===200){
                yield delay(500);
                yield put(DeleteUserSuccess(id));
            }
        } catch (error) {
            yield put(DeleteUserError(error.response.data));
        }
        }


        function* onUpdateUserStartAsynch({payload: {userid,userData}}) {
            try {
                const  response =yield call(UpdateUserApi,userid,userData);
                if(response.status===200){
                    yield delay(500);
                    yield put(UpdateUserSuccess());
                }
            } catch (error) {
                yield put(UpdateUserError(error.response.data));
            }
            }
        
 function* onLoaduser() {
    yield takeEvery(types.LOAD_USER_START, onLoadUserStartAsynch)
}

 function* onCreateUser() {
    yield takeLatest(types.CREAT_USER_START, onCreateUserStartAsynch);
}
function* onDeleteUser() {
    while(true){
        const {payload:id} =yield take(types.DELETE_USER_START);
        yield call(onDeleteUserStartAsynch,id);
    }
}
function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsynch);
}
const userSegas = [
    fork(onLoaduser),
    fork(onCreateUser),
    fork(onDeleteUser),
    fork(onUpdateUser)
];
export default function* rootSega() {
    yield all([...userSegas]);
}