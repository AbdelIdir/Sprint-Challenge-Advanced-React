import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./NavBar";
import { Cards } from "./Cards";

afterEach(rtl.cleanup);

it("shows that the component displaying the players is being rendered properly", () => {
  const wrapper = rtl.render(<Navbar />);
  wrapper.debug();

  const checkPlayers = wrapper.queryByText(/players/i);

  expect(checkPlayers).toBeInTheDocument();
});

it("shows that the subject of the app is displaying properly", () => {
  const wrapper = rtl.render(<App />);
  wrapper.debug();

  const checkName = wrapper.queryByText(/world/i);

  expect(checkName).toBeInTheDocument();
});
