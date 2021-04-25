import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
// default export is called userSlice.reducer;
// but because it's a default i guess i'm just
// calling it whatever i want

export default configureStore({
  reducer: { user: userReducer, movie: movieReducer },
  middleware: getDefaultMiddleware({
    // default middleware
    serializableCheck: false,
  }),
});
