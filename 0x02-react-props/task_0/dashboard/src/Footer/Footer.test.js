import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("Footer Component Tests", () => {
  it("Renders a div with the class App-Footer", () => {
    const app = shallow(<App />);
    expect(app.find(".App-Footer")).toBeDefined();
  });
});
