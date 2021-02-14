import { put, takeLatest, call, all, delay } from "redux-saga/effects";

console.log("test". process.env.API_URL_REALTIME);
console.log("test1", API_URL_REALTIME);

const API_URL = {
    realtime: `${process.env.API_URL_REALTIME}`,
    mostviewed: `${process.env.API_URL_MOSTVIEWED}`,
    search: `${process.env.API_URL_SEARCH}`,
};

const myFetch = async (url, params) => {
    const urlObj = new URL(url);
    urlObj.search = new URLSearchParams(params).toString();

    const fetchPromise = fetch(urlObj);
    const response = await Promise.race([fetchPromise]);
    const responseJson = await response.json();

    return responseJson;
};

function* callAPI(action) {
    const params = { "api-key": process.env.API_KEY };
    const response = yield call(myFetch, API_URL[action.meta], params);
    yield delay(250);

    yield put({
        type: "receive",
        meta: action.meta,
        payload: response.results,
    });
}

function* callSearchAPI(action) {
    const params = { "api-key": process.env.API_KEY, q: action.payload };
    const response = yield call(myFetch, API_URL[action.meta], params);
    const payload = { data: response.response.docs, keyword: action.payload };

    yield put({
        type: "receive",
        meta: action.meta,
        payload,
    });
}

function* actionWatcher() {
    yield takeLatest("realtime/request", callAPI);
    yield takeLatest("mostviewed/request", callAPI);
    yield takeLatest("search/request", callSearchAPI);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
