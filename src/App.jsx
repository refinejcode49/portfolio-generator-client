import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NotFound from "./pages/NotFound/NotFound";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <h1>front end</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
