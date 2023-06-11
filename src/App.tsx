import { useEffect } from "react";
import "./App.css";
import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      location.pathname &&
      location.pathname.includes("portfoliio-fullstack")
    ) {
      navigate("portfoliio-fullstack/about");
    }
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
