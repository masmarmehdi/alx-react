import React from "react";
import App from "./App";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App Component Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it("should display CourseList if isLoggedIn is true", () => {
    const app = shallow(<App />);
    app.setProps({ isLoggedIn: true });
    expect(app.contains(<CourseList />)).toBe(true);
    expect(app.contains(<Login />)).toBe(false);
  });

  it("should display Login if isLoggedIn is false", () => {
    const app = shallow(<App isLoggedIn={false} />);
    expect(app.contains(<Login />)).toBe(true);
    expect(app.contains(<CourseList />)).toBe(false);
  });
});
