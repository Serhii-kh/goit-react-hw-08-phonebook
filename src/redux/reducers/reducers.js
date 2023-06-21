import { ContactsListSlice } from "redux/ContactsListSlice";
import { FilterSlice } from "redux/FilterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "redux/auth/authSlice";

export const rootReducer = combineReducers({
	contacts: ContactsListSlice.reducer,
	filter: FilterSlice.reducer,
	auth: authReducer,
})



