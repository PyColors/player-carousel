import React from "react";
import LiveTV from "../LiveTV";

it("Should renders LiveTV page without exploding", () => {
    const wrapper = shallow(<LiveTV>Hello Jest!</LiveTV>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
});
