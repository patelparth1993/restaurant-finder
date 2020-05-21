import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";

import { ViewRestaurant } from "../ViewRestaurant";

afterEach(cleanup);

const fakeResList = [
  {
    id: 21307,
    name: "Scaramouche Restaurant",
    address: "1 Benvenuto Place",
    city: "Toronto",
    price: 4,
    area: "Toronto / SW Ontario",
  },
  {
    id: 82957,
    name: "The Sultan's Tent",
    address: "49 Front St E",
    city: "Toronto",
    price: 2,
    area: "Toronto / SW Ontario",
  },
];
it("should take a snapshot", () => {
  const { asFragment } = render(
    <ViewRestaurant resList={fakeResList} search={""} filterByPrice={0} />
  );

  expect(
    asFragment(
      <ViewRestaurant resList={fakeResList} search={""} filterByPrice={0} />
    )
  ).toMatchSnapshot();
});

describe("Restaurant component renders", () => {
  it("restaurant list", () => {
    const { getByTestId } = render(
      <ViewRestaurant resList={fakeResList} search={""} filterByPrice={0} />
    );
    const restaurantChildArray = Array.from(
      getByTestId("view-restaurant").children
    );

    expect(/.*Name.*Address.*Area.*$/.test(restaurantChildArray[0].textContent))
      .toBeTruthy;
  });

  it("No restaurants found if search is not met", () => {
    const { getByTestId } = render(
      <ViewRestaurant
        resList={fakeResList}
        search={"somesearch"}
        filterByPrice={0}
      />
    );
    expect(getByTestId("view-restaurant").textContent).toBe(
      "No Restaurants Found"
    );
  });
});
