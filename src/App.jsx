import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter basename="/reactSpringCopy">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
