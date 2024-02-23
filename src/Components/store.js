import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import loggedReducer from "./slice";

const persistConfig = {
  key: "root",
  storage,
  // Optionally define an array of reducer keys to persist
  // whitelist: ["logged"],
  // Optionally define an array of reducer keys to ignore
  // blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, loggedReducer);

const store = configureStore({
  reducer: {
    logged: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };

// import { configureStore } from "@reduxjs/toolkit";
// import loggedReducer from "./slice";

// export default configureStore({
//   reducer: {
//     logged: loggedReducer,
//   },
// });
