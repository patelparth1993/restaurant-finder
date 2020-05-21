import React from "react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

import { appStore } from "../../redux/appStore";
import Restaurant from "../Restaurant";

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(
    <Provider store={appStore}>
      <Restaurant />
    </Provider>
  );

  expect(
    asFragment(
      <Provider store={appStore}>
        <Restaurant />
      </Provider>
    )
  ).toMatchSnapshot();
});

describe("Restaurant component renders", () => {
  it("disabled button", () => {
    const { getByTestId } = render(
      <Provider store={appStore}>
        <Restaurant />
      </Provider>
    );
    expect(getByTestId("get_restaurant_btn").className).toBe("btn disabled");
  });

  it("enabled button once city is entered", () => {
    const { getByTestId } = render(
      <Provider store={appStore}>
        <Restaurant />
      </Provider>
    );
    fireEvent.change(screen.getByLabelText("City"), {
      target: { value: "toronto" },
    });
    expect(getByTestId("get_restaurant_btn").className).toBe("btn");
  });
});
