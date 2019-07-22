import * as actions from "./constants";

const homePageReducer = (
    state = {
        isLoading: true,
        dataHomePage: {},
        error: null
    },
    action
) => {
    switch (action.type) {
        case actions.FETCH_DATA_HOME_PAGE:
            return Object.assign({}, state, {
                isLoading: true
            });

        case actions.RECEIVE_DATA_HOME_PAGE:
            return Object.assign({}, state, {
                isLoading: false,
                dataHomePage: action.dataHomePage
            });

        case actions.FAILED_RECIEVE_DATA_HOME_PAGE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });

        default:
            return state;
    }
};

export default homePageReducer;
