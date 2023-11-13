/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";

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

describe("When ctrl + h is pressed", () => {
  it("should call logOut function", () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: 'h'});
    document.dispatchEvent(event);
    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  })

  document.alert = jest.fn();

  it("should check that alert function is called", () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", {ctrlKey: true, key: 'h'});
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledWith('You have logged out!');
    spy.mockRestore();
    wrapper.unmount();
  })
})
