import reducer from '../reducer';
import * as actions from '../constants';
import data from "../../../../../data/response";

const initialState = {
    dataHomePage: {},
    error: null,
    isLoading: true
};

describe('HomePage reducer', () => {
    it("returns proper initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            isLoading: true,
            dataHomePage: {},
            error: null
        });
    });

    it("Should handles FETCH_DATA_HOME_PAGE action", () => {
        const startAction = {
            type: actions.FETCH_DATA_HOME_PAGE
        };
        expect(reducer({}, startAction)).toEqual({isLoading: true});
    });

    it("Should handles RECEIVE_DATA_HOME_PAGE action", () => {
        const successAction = {
            type: actions.RECEIVE_DATA_HOME_PAGE,
            dataHomePage: data
        };
        expect(reducer({}, successAction)).toEqual({
            dataHomePage: data,
            isLoading: false
        });
    });

    it("Should handles FAILED_RECIEVE_DATA_HOME_PAGE action", () => {
        const failAction = {
            type: actions.FAILED_RECIEVE_DATA_HOME_PAGE,
            error: {success: false}
        };
        expect(reducer({}, failAction)).toEqual({
            isLoading: false,
            error: {success: false}
        });
    });

    it('Should returns the same state on an inapplicable action', () => {
        const state = ['foo', 'bar'];
        const stateClone = ['foo', 'bar'];
        const newState = reducer(state, {type: 'UNDEFINED_ACTION'});

        expect(newState).toEqual(stateClone);
        expect(newState).toBe(state);
    });

    it('Should returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
});
