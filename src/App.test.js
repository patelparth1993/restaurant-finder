import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Restaurant header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Restaurant Finder/i);
  expect(linkElement).toBeInTheDocument();
});
