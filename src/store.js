import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { userReducer } from "reducers/userReducers";

const reducer = combineReducers({
    user: userReducer,
});

// const middleware = [thunk];
const store = createStore(
    reducer,
);
export default store;   