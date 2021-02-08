export const fetchRealTimeData = () => ({
    type: "realtime/callApi",
    meta: "realtime",
});

export const fetchMostViewedData = () => ({
    type: "mostviewed/callApi",
    meta: "mostviewed",
});
