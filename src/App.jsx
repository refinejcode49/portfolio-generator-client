import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NotFound from "./pages/NotFound/NotFound";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NavBar from "./components/Navbar/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { GlobalStyle } from "./styles";
import AboutComponent from "./pages/HowItWorks";
import CreatePortfolio from "./pages/CreatePortfolio/CreatePortfolio";
import MinimalTheme from "./components/Templates/MinimalTheme/MinimalTheme";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoutes>
              <CreatePortfolio />
            </ProtectedRoutes>
          }
        />
        <Route path="/minimal-theme" element={<MinimalTheme />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
