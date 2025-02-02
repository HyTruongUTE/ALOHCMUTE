import "./App.scss";
import Login from "../components/login";
import Home from "../components/home";
import Signup from "../components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Newsfeed from "../components/newsfeed";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        {/* <Route path="/news" element={<Newsfeed />} /> */}
      </Routes>
    </div>
  );
}

export default App;
