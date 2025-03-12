import { configureStore, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon_slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;

// Define types for RootState and AppDispatch for better type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
