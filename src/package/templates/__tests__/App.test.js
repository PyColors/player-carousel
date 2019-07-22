import React from "react";
import App from "../App";

it("Should renders App page without exploding", () => {
    const wrapper = shallow(<App>Hello Jest!</App>);
    expect(wrapper).toMatchSnapshot();
});
