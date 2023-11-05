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

  // Notifications Renders 3 li elements
  it("Renders three li elements", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("li")).toHaveLength(3);
  });

  // Notifications renders correct text
  it("Renders correct text", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("p").text()).toBe("Here is the list of notifications");
  });
});
