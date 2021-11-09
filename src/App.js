import React from 'react'
import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import QuestionScreen from "./screens/QuestionScreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [isSigned, setIsSigned] = React.useState(true);
  return (
    <Router>
      <div className="App">
        {isSigned ? (
          <>
            <Header />
            <h1 className="mb-5">...</h1>
            <Routes>
              <Route default path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/question" element={<QuestionScreen />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
