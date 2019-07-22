import { combineReducers } from "redux";
import homePageReducer from "./package/pages/HomePage/reducer";
import * as constantsActions from "./utils";

const appReducers = combineReducers({
    homePageReducer
});

const reducers = (state, action) => {
    if (action.type === constantsActions.CLEAR_STORE) {
        state = undefined;
    }

    return appReducers(state, action);
};

export default reducers;
