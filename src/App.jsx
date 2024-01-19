import { Routes, Link, Route, Navigate } from "react-router-dom";
import MainPage from "./compontents/MainPage";
import TheFooter from "./compontents/TheFooter";
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
        </Routes>
        <TheFooter />
      </Provider>
    </>
  );
}

export default App;
