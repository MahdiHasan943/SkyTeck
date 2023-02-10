import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer.js";
import productReducer from "./productReducer.js";

const rootReducer = combineReducers({
  product: productReducer,
  filter: filterReducer,
});

export default rootReducer;