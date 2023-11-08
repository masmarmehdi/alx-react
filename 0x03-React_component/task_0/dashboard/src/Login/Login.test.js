import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("Login component", () => {
    it("should render without crashing", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toEqual(true);
    });

    it("should have 2 input tags and 2 label tags", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find('label').length).toBe(2);
    })
})