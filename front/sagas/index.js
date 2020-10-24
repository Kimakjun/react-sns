import {all, fork,} from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';


export default function* rootSaga(){
    yield all([ // all 은 배열안 모두실행.
        fork(postSaga),
        fork(userSaga),
    ])
}
