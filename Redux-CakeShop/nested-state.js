const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Vishwas",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};
// action type
const STREET_UPDATED = "STREET_UPDATED";
// action creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const info = redux.createStore(reducer);

console.log("Initial State: ", info.getState());

const unSubscribe = info.subscribe(() => {
  console.log("Updated State: ", info.getState());
});

info.dispatch(updateStreet("432 Main Street"));

unSubscribe();
