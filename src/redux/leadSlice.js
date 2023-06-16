import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../utils/httpRequest";

export const getAllLeads = createAsyncThunk("/leads/content", async () => {
  const response = await request.get("/customers");
  return response.data;
});

export const leadsSlice = createSlice({
  name: "leads",
  initialState: {
    isLoading: false,
    leads: [],
  },
  reducers: {
    addNewLead: (state, action) => {
      let { newLeadObj } = action.payload;
      state.leads = [...state.leads, newLeadObj];
    },

    deleteLead: (state, action) => {
      let { index } = action.payload;
      state.leads.splice(index, 1);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllLeads.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllLeads.fulfilled, (state, action) => {
        state.leads = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllLeads.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addNewLead, deleteLead } = leadsSlice.actions;

export default leadsSlice.reducer;
