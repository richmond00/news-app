import { put, takeLatest, call, all } from "redux-saga/effects";

const API_URL = {
    realtime: `${process.env.API_URL}/api/realtime`,
    mostviewed: `${process.env.API_URL}/api/mostviewed`,
    search: `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
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

    yield put({
        type: "receive",
        meta: action.meta,
        payload: response.results,
    });
}

function* callSearchAPI(action) {
    const params = { "api-key": process.env.API_KEY, q: action.payload };
    const response = yield call(myFetch, API_URL[action.meta], params);

    yield put({
        type: "receive",
        meta: action.meta,
        payload: response.response.docs,
    });
}

function* actionWatcher() {
    yield takeLatest("request", callAPI);
    yield takeLatest("search/request", callSearchAPI);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
