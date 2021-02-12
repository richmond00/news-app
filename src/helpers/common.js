export const myFunc = () => null;

export const getStringByLanguage = (langauge, stringKey) => {
    const languageStrings = {
        en: {
            realtime: "Real time",
            mostviewed: "Most viewed",
            realtimeTitle: "Real time articles",
            mostviewedTitle: "Most viewed articles",
            searchTitle: "Search results",
        },
        kr: {
            realtime: "실시간",
            mostviewed: "인기기사",
            realtimeTitle: "실시간 속보",
            mostviewedTitle: "가장 많이 본 기사",
            searchTitle: "검색결과",
        },
    };

    return languageStrings[langauge][stringKey];
};
