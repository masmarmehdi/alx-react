import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header Component Tests", () => {
  it("Renders a div with the class App-header", () => {
    const header = shallow(<Header />);
    expect(header.find(".App-header")).toBeDefined();
  });
});
