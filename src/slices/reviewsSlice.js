import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { setReviews } = reviewsSlice.actions;
export const selectReviews = (state) => state.reviews.reviews;

export default reviewsSlice.reducer;
