import { combineReducers } from "redux";

const initialDisplayState = {
    language: "en",
    theme: "light",
};

const initialArticleState = {
    realtime: [],
    mostviewed: [],
};

const displayReducer = (state = initialDisplayState, action) => {
    switch (action.type) {
        case "topnav/pickLanguage": {
            const language = action.payload === "en" ? "kr" : "en";
            return { ...state, language };
        }

        case "topnav/pickTheme": {
            const theme = action.payload === "dark" ? "light" : "dark";
            return { ...state, theme };
        }

        default:
            return state;
    }
};

const articleReducer = (state = initialArticleState, action) => {
    switch (action.type) {
        case "request":
            return { ...state, isLoading: true };

        case "receive":
            return {
                ...state,
                [action.meta]: action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    article: articleReducer,
    display: displayReducer,
});

export default rootReducer;
