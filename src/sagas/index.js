import { put, takeLatest, call, all } from "redux-saga/effects";

const API_URL_REALTIME = `${process.env.API_URL_ROOT}/api/realtime`;
const API_URL_MOSTVIEWED = `${process.env.API_URL_ROOT}/api/mostviewed`;

const myFetch = async (url) => {
    const promise = fetch(url);
    const response = await Promise.race([promise]);
    const data = await response.json();

    return data;
};

function* fetctRealTime(action) {
    const data = yield call(myFetch, API_URL_REALTIME);
    const dataName = action.type.split("/")[0];
    yield put({ type: "received", meta: dataName, payload: data.results });
}

function* fetchMostViewed() {
    const result = yield call(myFetch, API_URL_MOSTVIEWED);
    yield put({ type: "received", payload: result });
}

function* actionWatcher() {
    yield takeLatest("realtime/callApi", fetctRealTime);
    yield takeLatest("mostviewed/callApi", fetchMostViewed);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
