import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'

export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({ type: 'INCREMENT' })
}

export function* counterSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}