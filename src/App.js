import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { FavoriteNews } from "./pages/FavoriteNews";
import { HomePage } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewsItem } from "./pages/NewsItem";
import { RegistrationPage } from "./pages/Registration";
import { Profile } from "./pages/Profile";
import { Provider } from "react-redux";
import {store} from './store/store'
function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewsItem />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/favoritenews" element={<FavoriteNews />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      </Provider>
     
    </Router>
  );
}
export default App;
