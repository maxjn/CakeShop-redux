const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

//initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// action types
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_FAILD = "FETCH_USER_FAILD";
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

// action creators
function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUserSucceeded(users) {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: users,
  };
}
function fetchUserFailed(error) {
  return {
    type: FETCH_USER_FAILD,
    payload: error,
  };
}

// async action creator function
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUserSucceeded(users));
      })
      .catch((err) => {
        dispatch(fetchUserFailed(err.message));
      });
  };
};

// reduceer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILD:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//redux store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
