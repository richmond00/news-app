import { put, takeLatest, call, all } from "redux-saga/effects";

const URL = "http://localhost:3000/api/realtime";

const myFetch = async (url) => {
    const promise = fetch(url);
    const response = await Promise.race([promise]);
    const data = await response.json();

    return data;
};

function* fetchNews() {
    const result = yield call(myFetch, URL);
    yield put({ type: "received", payload: result });
}

function* actionWatcher() {
    yield takeLatest("realtime/callApi", fetchNews);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
