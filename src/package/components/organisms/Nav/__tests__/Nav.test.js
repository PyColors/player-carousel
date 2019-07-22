import React from "react";
import Nav from "../Nav";

it("Should renders Nav page without exploding", () => {
    const wrapper = shallow(<Nav>Hello Jest!</Nav>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveLength(1)
});
