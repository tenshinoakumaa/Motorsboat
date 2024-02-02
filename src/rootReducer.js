import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import reviewsReducer from './slices/reviewsSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
});

export default rootReducer;