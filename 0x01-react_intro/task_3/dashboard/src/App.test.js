import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Component Tests", () => {
  // Test if App is working well
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  // App headr test
  it("Renders a div with the class App-header", () => {
    const app = shallow(<App />);
    expect(app.find(".App-header")).toBeDefined();
  });

  // App body test
  it("Renders a div with the class App-body", () => {
    const app = shallow(<App />);
    expect(app.find(".App-body")).toBeDefined();
  });

  // App footer test
  it("Renders a div with the class App-footer", () => {
    const app = shallow(<App />);
    expect(app.find(".App-footer")).toBeDefined();
  });
});
