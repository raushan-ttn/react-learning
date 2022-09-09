import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="page outer-layout">
           <div className="menu"><Navbar /></div>
           <div className="content"><Outlet /></div>
        </div>
    );
};

export default Layout;