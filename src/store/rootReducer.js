// src/store/reducer.js
import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import postReducer from "./posts/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  // etc...
  posts: postReducer,
});

export default reducer;
