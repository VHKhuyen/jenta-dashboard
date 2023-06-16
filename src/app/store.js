import { configureStore } from "@reduxjs/toolkit";
import { headerSlice, modalSlice, rightDrawerSlice, leadSlice } from "../redux";
const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  lead: leadSlice,
};

export default configureStore({
  reducer: combinedReducer,
});
