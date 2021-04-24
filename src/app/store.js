import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
// default export is called userSlice.reducer;
// but because it's a default i guess i'm just
// calling it whatever i want

export default configureStore({
  reducer: { user: userReducer },
  middleware: getDefaultMiddleware({
    // default middleware
    serializableCheck: false,
  }),
});
