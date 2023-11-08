import React from "react";
import CourseList from "./CourseList";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseList Component tests", () => {
  it("should render CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render 5 different rows", () => {
    const wrapper = shallow(<CourseList courses={[]} />);
    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((element) => {
      expect(element.equals(<CourseListRow textFirstCell="Test" />));
    });

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    wrapper.find("tbody").forEach((element) => {
      expect(element.equals(<CourseListRow textFirstCell="Test" />));
    });
  });
});
