import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./pages/chat/Chat";
import AdminRoute from "./pages/admin/AdminRoute";
import ProfileRoute from "./pages/profile/ProfileRoute";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import SignIn from "./pages/SignIn/SignIn";

const App: React.FC = () => {
  const isActive = useLocation().pathname.split("/")[1];
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProfileRoute />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/Items/*" element={<ItemsPage />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      {isActive !== "admin" && <Footer />}
    </>
  );
};

export default App;
