const { configureStore } = require("@reduxjs/toolkit");
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AuthReducer } from "./auth/authSlice";
import { wordsReducer } from "./words/wordSlice";
import { FilterReducer } from "./words/filterSlice";
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, AuthReducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    words: wordsReducer,
    filter: FilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
