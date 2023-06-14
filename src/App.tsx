import { useEffect } from "react";
import "./App.css";
import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import baseUrl from "./baseUrl";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      location.pathname &&
      location.pathname.includes("portfoliio-fullstack")
    ) {
      navigate(`${baseUrl}/about`);
    }
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="">
          <Header />
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
