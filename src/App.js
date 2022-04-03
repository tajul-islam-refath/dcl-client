import { createContext, useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { PrivateRoute } from "./components/PrivateRoute";
import About from "./pages/About";
import Aboutform from "./pages/AboutForm";
import AddNewAdmin from "./pages/AddNewAdmin";
import Addservice from "./pages/AddService";
import Adminlogin from "./pages/AdminLogin";
import Dashbord from "./pages/Dashbord";
import Servicelist from "./pages/ServiceList";

export const AuthContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  const [admin, setAdmin] = useState({})
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        admin,
        setAdmin,
        isAdmin,
        setIsAdmin
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="about" element={<About />} />
            <Route path="admin" element={<Navigate to="/admin/about" />} />
            <Route path="admin" element={
              <PrivateRoute>
                <Dashbord />
              </PrivateRoute>
            }>
              <Route path="about" element={<Aboutform />} />
              <Route path="service-list" element={<Servicelist />} />
              <Route path="add-service" element={<Addservice />} />
              <Route path="add-admin" element={<AddNewAdmin />} />
            </Route>
            <Route path="login" element={<Adminlogin />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
