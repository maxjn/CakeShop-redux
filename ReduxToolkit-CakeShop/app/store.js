const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
//reducers
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");

const logger = reduxLogger.createLogger();
// store configuration
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
