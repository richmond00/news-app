import { combineReducers } from "redux";

const articleReducer = (state = {}, action) => {
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
});

export default rootReducer;
