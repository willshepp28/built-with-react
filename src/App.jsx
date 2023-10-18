import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./projects/instagram/explore/explore";
import MyNetwork from "./projects/linkedin/my-network/my-network";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Buit With React!</h1>} />
        <Route path="/ig-clone/*" element={<InstagramRoutes />} />
        <Route path="/linkedin-clone/*" element={<LinkedinRoutes />} />
      </Routes>
    </Router>
  );
}

function LinkedinRoutes() {
  return (
    <Routes>
      <Route path="/my-network" element={<MyNetwork />} />
    </Routes>
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
