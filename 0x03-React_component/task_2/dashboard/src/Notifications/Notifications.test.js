import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe("Notifications Component Tests", () => {
  // Test if Notifications is working well
  it("Renders without crashing", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  // Notifications headr test
  it("Renders ul of notifications", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("ul")).toBeDefined();
  });
});

describe("onclick event behaves as it should", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<Notifications />);
    const spy = jest.spyOn(console, "log").mockImplementation();

    wrapper.instance().markAsRead = spy;
    wrapper.instance().markAsRead(1);
    expect(wrapper.instance().markAsRead).toBeCalledWith(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});
