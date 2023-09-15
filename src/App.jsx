import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React, { useContext } from "react";
import {Route, BrowserRouter as Router, Link, Outlet} from "react-router-dom";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {

const {theme} = useContext(ContextGlobal)

  return (
      <div className={theme ? "dark" : null}>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;