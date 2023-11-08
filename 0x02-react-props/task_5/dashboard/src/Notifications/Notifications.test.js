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
