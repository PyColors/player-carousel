import React from "react";
import Footer from "../Footer";

it("Should renders Footer page without exploding", () => {
    const wrapper = shallow(<Footer>Hello Jest!</Footer>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveLength(1)
});
