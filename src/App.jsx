import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./projects/instagram/explore/explore";
import MyNetwork from "./projects/linkedin/my-network/my-network";
import Challenges from "./projects/strava/challenges/challenges";
import Home from "./projects/x/pages/home/home.x";
import UserProfile from "./projects/x/pages/user-profile/user-profile.x";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Buit With React!</h1>} />
        <Route path="/ig-clone/*" element={<InstagramRoutes />} />
        <Route path="/linkedin-clone/*" element={<LinkedinRoutes />} />
        <Route path="x-clone/*" element={<XRoutes />} />
        {/* <Route path="/strava-clone/*" element={<StravaRoutes />} /> */}
      </Routes>
    </Router>
  );
}

function XRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/:username/*" element={<UserProfile />} />
    </Routes>
  );
}

// function StravaRoutes() {
//   return (
//     <Routes>
//       <Route path="/challenges" element={<Challenges />} />
//     </Routes>
//   );
// }

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
