import React from "react";
import Header from "../Header";

it("Should renders Header page without exploding", () => {
    const wrapper = shallow(<Header>Hello Jest!</Header>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveLength(1)
});
