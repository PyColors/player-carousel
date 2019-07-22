import React from "react";

import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import data from "../../../../../data/response";
import {fetchDataIfNeeded} from '../HomePage'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchData actions", () => {
    beforeEach(function() {
        moxios.install();
    });

    afterEach(function() {
        moxios.uninstall();
    });

    describe("Actions HomePage", () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: data
            });
        });

        it('Should returns data for HomePage', () => {
            const expectedData = { dataHomePage: data };
            const store = mockStore({
                dataHomePage: data
            });
            expect(store.getState(fetchDataIfNeeded)).toEqual(expectedData);
            expect(store.getState()).toMatchSnapshot();
        });
    });
});
