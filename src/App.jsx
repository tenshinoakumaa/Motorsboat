import { Routes, Link, Route, Navigate } from "react-router-dom";

import MainPage from "./compontents/MainPage";
import ReviewsPage from "./compontents/ReviewsPage";
import TheFooter from "./compontents/TheFooter";
import TheMain from "./compontents/TheMain";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./slices/productsSlice";
import { setReviews } from "./slices/reviewsSlice";
import { useQuery } from "react-query";
import { useEffect } from "react";

const fetchProducts = async () => {
  const response = await fetch(
    "https://motorsboat-37cbf-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
  );
  const data = await response.json();
  return data;
};

const fetchReviews = async () => {
  const response = await fetch(
    "https://motorsboat-37cbf-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json"
  );
  const data = await response.json();
  return data;
};

const fetchProductsAndReviews = async () => {
  const [productsResponse, reviewsResponse] = await Promise.all([
    fetchProducts(),
    fetchReviews(),
  ]);

  return { products: productsResponse, reviews: reviewsResponse };
};

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useQuery(
    "productsAndReviews",
    fetchProductsAndReviews
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      dispatch(setProducts(data.products));
      dispatch(setReviews(data.reviews));
    }
  }, [dispatch, data, isLoading, isError]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={<MainPage title={"MOTORSBOAT"} text={"лодки & моторы"} />}
        />
        <Route
          path="/reviews"
          element={<ReviewsPage title={"Отзывы"} text={"лодки & моторы"} />}
        />
        <Route
          path="*"
          element={
            <TheMain title={"404"} text={"Такой страницы не существует"} />
          }
        />
      </Routes>
      <TheFooter />
    </>
  );
}

export default App;
