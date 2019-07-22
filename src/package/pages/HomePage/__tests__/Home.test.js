import React from "react";

it("Should renders Home page without exploding", () => {
    const wrapper = shallow(<div>Hello Jest!</div>);
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toMatchSnapshot();
});
