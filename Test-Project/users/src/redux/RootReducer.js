import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./Reducer";



const rootReducer = combineReducers({
    data:usersReducer,
});

export default rootReducer;