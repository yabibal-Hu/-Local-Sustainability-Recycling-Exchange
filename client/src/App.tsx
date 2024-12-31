import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./pages/chat/Chat";
import AdminRoute from "./pages/admin/AdminRoute";
import ProfileRoute from "./pages/profile/ProfileRoute";

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
      </Routes>
     {isActive !== "admin"  && <Footer />} 
    </>
  );
};

export default App;
