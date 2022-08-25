import { combineReducers } from "redux";
import { dashboardReducer } from "./slices/dashboard";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
