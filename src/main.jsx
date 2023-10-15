import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Survey from "./Pages/survey/index.jsx";
import Home from "./Pages/Home/index.jsx";
import Error from "./components/Error/index.jsx";
// import ClientForm from "./components/ClientForm"
import Freelances from "./Pages/Freelances";
import Results from "./Pages/Results/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="survey/:questionNumber" element={<Survey />} />
          <Route path="*" element={<Error />} />
          <Route path="freelances" element={<Freelances />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
