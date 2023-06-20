import { ContactsListSlice } from "redux/ContactsListSlice";
import { FilterSlice } from "redux/FilterSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
	contacts: ContactsListSlice.reducer,
	filter: FilterSlice.reducer,
})



