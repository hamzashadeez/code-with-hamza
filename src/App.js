import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import QuestionScreen from "./screens/QuestionScreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
        <div className="App">
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/question" element={<QuestionScreen  />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
