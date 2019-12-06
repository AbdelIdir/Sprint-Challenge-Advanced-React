import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./NavBar";
import { Cards } from "./Cards";

afterEach(rtl.cleanup);

it("shows that the word is present ", () => {
  const wrapper = rtl.render(<Navbar />);
  wrapper.debug();

  const checkPlayers = wrapper.queryByText(/players/i);

  expect(checkPlayers).toBeInTheDocument();
});

it("shows the length of players array", () => {
  const wrapper = rtl.render(<App/>);
  wrapper.debug();

  const checkName = wrapper.queryByText(/world/i);

  expect(checkName).toBeInTheDocument();
});
