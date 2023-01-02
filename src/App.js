import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { FavoriteNews } from "./pages/FavoriteNews";
import { HomePage } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewsItem } from "./pages/NewsItem";
import { RegistrationPage } from "./pages/Registration";
import { Profile } from "./pages/Profile";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { useState } from "react";
function App() {
  const [isLoggendIn, setIsLoggendIn] = useState(() => {
    if (localStorage.getItem("isLoggedIn") === "true") return true;
    return false;
  });
  const tr = useSelector((state) => state.profile);
  // (tr);
  const [userNickname, setUserNickname] = useState("");
  const userId = localStorage.getItem("userId");
  return (
    <Router>
      {/* <Provider store={store}> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<NewsItem />} />
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
          <Route path="/favoritenews" element={<FavoriteNews />} />
          <Route path={`/profile/${userId}`} element={<Profile />} />
        </Routes>
      </div>
      {/* </Provider> */}
    </Router>
  );
}
export default App;
