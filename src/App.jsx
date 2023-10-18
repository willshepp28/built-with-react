import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./projects/instagram/explore/explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Buit With React!</h1>} />
        <Route path="/ig-clone/*" element={<InstagramRoutes />} />
      </Routes>
    </Router>
  );
}

function InstagramRoutes() {
  return (
    <Routes>
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App;
