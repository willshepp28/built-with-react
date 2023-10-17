import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./projects/instagram/explore/explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/instagram/*" element={<InstagramRoutes />} />
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
