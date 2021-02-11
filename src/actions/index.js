export const fetchRealTimeData = () => ({
    type: "realtime/request",
    meta: "realtime",
});

export const fetchMostViewedData = () => ({
    type: "mostviewed/request",
    meta: "mostviewed",
});

export const fetchSearchResult = (params) => ({
    type: "search/request",
    meta: "search",
    payload: params,
});
