import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <BrowserRouter basename="/reactSpringCopy">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <Navbar />
                <Main />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
