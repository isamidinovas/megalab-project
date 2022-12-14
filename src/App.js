import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/Home";
import { Login } from "./pages/Login";
import { RegistrationPage } from "./pages/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
