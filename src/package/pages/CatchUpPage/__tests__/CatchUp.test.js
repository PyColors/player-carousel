import React from "react";
import CatchUp from "../CatchUp";

test("Render a div", () => {
    const wrapper = shallow(<CatchUp>Hello Jest!</CatchUp>);
    expect(wrapper).toMatchSnapshot();
});
