import { createSlice } from "@reduxjs/toolkit";

export const travelAdvisorSlice = createSlice({
  name: "travelAdvisor",
  initialState: {
    places: [],
    child: {},
    isLoading: true,
    showTravelAdvisor: false,
  },

  reducers: {
    setPlaceData: (state, action) => {
      state.places = action.payload;
    },
    handleChildClicked: (state, action) => {
      state.child = action.payload;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setShowTravelAdvisor: (state, action) => {
      state.showTravelAdvisor = action.payload;
    },
  },
});

export const {
  setPlaceData,
  handleChildClicked,
  isLoading,
  setShowTravelAdvisor,
} = travelAdvisorSlice.actions;

export const selectPlaces = (state) => state.travelAdvisor.places;
export const selectChild = (state) => state.travelAdvisor.child;
export const selectisLoading = (state) => state.travelAdvisor.isLoading;
export const selectShowTravelAdvisor = (state) =>
  state.travelAdvisor.showTravelAdvisor;

export default travelAdvisorSlice.reducer;
