import { Routes, Link, Route, Navigate } from "react-router-dom";
import MainPage from "./compontents/MainPage";
import TheFooter from "./compontents/TheFooter";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<MainPage title={"MOTORSBOAT"}  text={"лодки & моторы"} />} />
      </Routes>
      <TheFooter />
    </>
  );
}

export default App;
