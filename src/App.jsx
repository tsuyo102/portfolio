import { useState } from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "./views/Top";
import TvModal from "./components/TvModal";

function App() {
  return (
    <Router basename="/portfolio">
      <TvModal />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
