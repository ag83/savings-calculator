import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import savings from './reducers/savingsReducer';
import { saveState, loadState } from "./helpers/reducerHelpers";

const initialState = loadState() || {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
	const devToolsExtension = window.devToolsExtension;

	if (typeof devToolsExtension === "function") {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const reducer = combineReducers({
    savings
});

const store = createStore(
    reducer,
    initialState,
    composedEnhancers
);

store.subscribe(() => {
    saveState({
        savings: store.getState().savings
    });
});

export default store;