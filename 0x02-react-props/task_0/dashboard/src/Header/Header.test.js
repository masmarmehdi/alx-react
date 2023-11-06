import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("Header Component Tests", () => {
  it("Renders a div with the class App-header", () => {
    const app = shallow(<App />);
    expect(app.find(".App-header")).toBeDefined();
  });
});
