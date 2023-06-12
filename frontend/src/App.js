import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Detail from "./components/Detail";
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      {/* <Link to="/">Home</Link>
      <Link to="/register">Register</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
