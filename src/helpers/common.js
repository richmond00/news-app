export const myFunc = () => null;

export const themes = {
    light: {
        header: "#fff",
        main: "#fff",
        color: "#000",
    },
    dark: {
        header: "#242526",
        main: "#18191a",
        color: "#f5f6f7",
    },
};

export const getStringByLanguage = (langauge, stringKey) => {
    const languageStrings = {
        en: {
            realtime: "Real time",
            mostviewed: "Most viewed",
            realtimeTitle: "Real time articles",
            mostviewedTitle: "Most viewed articles",
            searchTitle: "Search results",
            loading: "Loading",
            searchResult: "search results",
        },
        kr: {
            realtime: "실시간",
            mostviewed: "인기기사",
            realtimeTitle: "실시간 속보",
            mostviewedTitle: "가장 많이 본 기사",
            searchTitle: "검색결과",
            loading: "로딩 중입니다",
            searchResult: "검색결과",
        },
    };

    return languageStrings[langauge][stringKey];
};

export function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        return `${Math.floor(interval)} years`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return `${Math.floor(interval)} months`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return `${Math.floor(interval)} days`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return `${Math.floor(interval)} hours`;
    }
    interval = seconds / 60;
    if (interval > 1) {
        return `${Math.floor(interval)} minutes`;
    }
    return `${Math.floor(seconds)} seconds`;
}
