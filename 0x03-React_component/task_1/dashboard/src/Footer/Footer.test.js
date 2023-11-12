import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("Footer Component Tests", () => {
  it("Renders a div with the class App-Footer", () => {
    const footer = shallow(<Footer />);
    expect(footer.find(".App-Footer")).toBeDefined();
  });
});
