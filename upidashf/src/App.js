import "./App.css";
import Transactions from "./transactions.js";
import Welcome from "./welcomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="Transactions" element={<Transactions />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
