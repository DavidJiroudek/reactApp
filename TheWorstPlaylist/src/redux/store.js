import songReducer from "./reducers/songReducer";
import { configureStore } from '@reduxjs/toolkit'
import activeUrlReducer from "./reducers/activeUrlReducer";

export default configureStore({
  reducer: {
    songStore: songReducer,
    activeUrl: activeUrlReducer
  }
})
