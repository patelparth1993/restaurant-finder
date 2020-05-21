import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getRestaurants } from "../getRestaurant";
import actionType from "../actionType";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

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
describe("getRestaurant action creator", () => {
  beforeEach(() => {
    store.clearActions();
  });

  const mockGetRestaurants = (city) => {
    if (city.toLowerCase() === "toronto") {
      return fakeResList;
    } else {
      return [];
    }
  };

  it("dispatches GET_RESTAURANTS action and returns data on success", async () => {
    const mockDispatch = jest.fn();
    await getRestaurants("toronto", mockGetRestaurants)(mockDispatch);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: actionType.GET_RESTAURANT,
      payload: fakeResList,
    });
  });
});
