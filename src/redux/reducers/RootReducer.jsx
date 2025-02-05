import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import expireIn from "redux-persist-transform-expire-in";
import flight from "./ducks/FlightDuck";

// https://github.com/sirLisko/redux-persist-transform-expire-in
const expirationDelay = 1 * 60 * 60 * 1000; // expire in 60 minutes
const expirationKey = "expirationKey";
const appVersion = "1.0.0";
const persistConfig = {
  key: `rootstore_${appVersion}`,
  storage,
  transforms: [expireIn(expirationDelay, expirationKey, [])],
};

const reducers = {
  flight,
};

const rootReducer = persistCombineReducers(persistConfig, reducers);
export default rootReducer;
