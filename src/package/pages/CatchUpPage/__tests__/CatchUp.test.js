import React from "react";
import CatchUp from "../CatchUp";

it("Should renders CatchUp page without exploding", () => {
    const wrapper = shallow(<CatchUp>Hello Jest!</CatchUp>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveLength(1)
});
