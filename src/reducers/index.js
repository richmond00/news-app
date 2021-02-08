import { combineReducers } from "redux";

const articleReducer = (state = {}, action) => {
    switch (action.type) {
        case "received":
            return { ...state, [action.meta]: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    article: articleReducer,
});

export default rootReducer;
