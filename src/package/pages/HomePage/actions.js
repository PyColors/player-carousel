import axios from "axios";
import * as actions from "./constants";

export function fetchDataIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchData(getState())) {
            return dispatch(fetchData());
        }
    };
}

export function fetchData() {
    return dispatch => {
        dispatch(beginFetchData());
        axios
            .get(`../../../data/response.json`)
            .then(res => {
                dispatch(loadDataHomePage(res));
            })

            .catch(error => {
                const response = error.response;

                if (response === undefined) {
                    dispatch(fetchFailure(error));
                } else {
                    error.status = response.status;
                    error.statusText = response.statusText;
                    response.text().then(text => {
                        try {
                            const json = JSON.parse(text);
                            error.message = json.message;
                        } catch (ex) {
                            error.message = text;
                        }
                        dispatch(fetchFailure(error));
                    });
                }
            });
    };
}

function shouldFetchData(state) {
    return state !== null;
}

const beginFetchData = () => ({
    type: actions.FETCH_DATA_HOME_PAGE
});

const loadDataHomePage = payload => ({
    type: actions.RECEIVE_DATA_HOME_PAGE,
    dataHomePage: payload.data
});

const fetchFailure = () => ({
    type: actions.FAILED_RECIEVE_DATA_HOME_PAGE,
    error: true
});
