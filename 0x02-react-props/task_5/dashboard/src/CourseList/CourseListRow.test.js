import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with the colspan = 2 when textSecondCell does not exist", () => {
    const courseListRow = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    expect(courseListRow.find("tr").children()).toHaveLength(1);
    expect(courseListRow.find("tr").childAt(0).html()).toEqual(
      '<th colSpan="2">test</th>'
    );
  });

  it("should render two cells when textSecondCell is present", () => {
    const courseListRow = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="First Text"
        textSecondCell="Second Text"
      />
    );
    expect(courseListRow.find("tr").children()).toHaveLength(2);
    expect(courseListRow.find("tr").childAt(0).html()).toEqual(
      "<th>First Text</th>"
    );
    expect(courseListRow.find("tr").childAt(1).html()).toEqual(
      "<th>Second Text</th>"
    );
  });

  it("should render two td elements withing tr element if isHeader is false", () => {
    const courseListRow = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="First text"
        textSecondCell="Second text"
      />
    );
    expect(courseListRow.find("tr").children()).toHaveLength(2);
  });
});
