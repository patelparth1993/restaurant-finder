import reducer from "../restaurantReducer";
import actions from "../../actions/actionType";
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
describe("restaurant reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle GET_RESTAURANT", () => {
    expect(
      reducer([], {
        type: actions.GET_RESTAURANT,
        payload: fakeResList,
      })
    ).toEqual(fakeResList);
  });
});
