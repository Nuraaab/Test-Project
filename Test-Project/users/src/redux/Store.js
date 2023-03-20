import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./RootReducer";
import rootSega from "./UserSagas";

const segaMiddleWare = createSagaMiddleware();
const middleWare = [segaMiddleWare];
if (process.env.NODE_ENV === "development") {
    middleWare.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));
segaMiddleWare.run(rootSega);

export default store;