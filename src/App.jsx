import { Routes, Link, Route, Navigate } from "react-router-dom";

import MainPage from "./compontents/MainPage";
import ReviewsPage from "./compontents//ReviewsPage";
import TheFooter from "./compontents/TheFooter";
import TheMain from "./compontents/TheMain";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
