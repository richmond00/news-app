import { put, takeLatest, call, all } from "redux-saga/effects";

const API_URL = {
    realtime: `${process.env.API_URL_ROOT}/api/realtime`,
    mostviewed: `${process.env.API_URL_ROOT}/api/mostviewed`,
};

const myFetch = async (url) => {
    const promise = fetch(url);
    const response = await Promise.race([promise]);
    const data = await response.json();

    return data;
};

function* callAPI(action) {
    const data = yield call(myFetch, API_URL[action.meta]);
    yield put({ type: "receive", meta: action.meta, payload: data.results });
}

function* actionWatcher() {
    yield takeLatest("request", callAPI);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
