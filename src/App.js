import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HomeUser from "./components/HomeUser";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Headers from "./components/Headers";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Otpconfirm from "./components/Otpconfirm";
import Resend from "./components/Resend";


import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import userContext from "./context/UserContext";

function App() {

  const { user , checkuserinlocal} = useContext(userContext);
  useEffect(() => {
    checkuserinlocal();
  }, [])
  
  
  return (

    <BrowserRouter>
      <ToastContainer />

      <Navbar />
      <Routes>
        {user.stat && (<Route exact path="/components/Home" element={<Home />}></Route>)}
        {user.stat && (<Route exact path="/components/Profile" element={<Profile />}></Route>)}
        {user.stat && (<Route exact path="/components/Profile" element={<Profile />}></Route>)}

        <Route exact path="/components/Headers" element={<Headers />} > </Route>
        <Route exact path="/components/Resend" element={<Resend />} > </Route>
        <Route exact path="/" element={<Headers />}></Route>
        <Route
          exact
          path="/components/Register"
          element={<Register />}
        ></Route>
        <Route
          exact
          path="/components/Otpconfirm"
          element={<Otpconfirm />}
        ></Route>

        <Route
          exact
          path="/components/About"
          element={<About />}
        ></Route>
        <Route
          exact
          path="/components/Contact"
          element={<Contact />}
        ></Route>
        <Route exact path="/components/Login" element={<Login />}></Route>
        <Route
          exact
          path="/components/HomeUser"
          element={<HomeUser />}
        ></Route>
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
