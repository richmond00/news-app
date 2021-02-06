import { combineReducers } from "redux";

const apiReducer = (state = {}, action) => {
    switch (action.type) {
        case "received":
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    api: apiReducer,
});

export default rootReducer;
