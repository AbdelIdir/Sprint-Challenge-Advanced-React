import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./NavBar";

afterEach(rtl.cleanup);
// beforeEach, beforeAll, afterAll

it("shows that the word is present ", () => {
  // step 3 - mount the component we want to test
  const wrapper = rtl.render(<Navbar />);
  wrapper.debug();
  // step 4 - capture the element of interest BY "READABLE" PROPERTY
  // we normally care about the readable text
  // or the aria attributes (screen readers)
  const learnReactElement = wrapper.queryByText(/players/i);

  // const dis = wrapper.queryByText(/display/i)

  // step 5 - assert that the element is there
  expect(learnReactElement).toBeInTheDocument();

  // const linkElement = getByText(/2/i); // 2 because we clicked twice
  // expect(linkElement).toBeInTheDocument()
});
