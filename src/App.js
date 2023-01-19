import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { FavoriteNews } from "./pages/FavoriteNews";
import { HomePage } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewsDetail } from "./pages/NewsDetail/index";
import { RegistrationPage } from "./pages/Registration";
import { Profile } from "./pages/Profile";
import { useState } from "react";
import PrivatRoute from "./hooks/router/privatRoute";
function App() {
  const [isLoggendIn, setIsLoggendIn] = useState(() => {
    if (localStorage.getItem("isLoggedIn") === "true") return true;
    return false;
  });
  const [userNickname, setUserNickname] = useState("");
  const userId = localStorage.getItem("userId");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<PrivatRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<NewsDetail />} />
            <Route path="/favoritenews" element={<FavoriteNews />} />
            <Route path={`/profile/${userId}`} element={<Profile />} />
          </Route>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route
            path="/login"
            element={
              <Login
                setIsLoggendIn={setIsLoggendIn}
                isLoggendIn={isLoggendIn}
                setUserNickname={setUserNickname}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
