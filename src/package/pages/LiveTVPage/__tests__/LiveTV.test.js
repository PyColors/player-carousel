import React from "react";
import LiveTV from "../LiveTV";

test("Render a div", () => {
    const wrapper = shallow(<LiveTV>Hello Jest!</LiveTV>);
    expect(wrapper).toMatchSnapshot();
});
