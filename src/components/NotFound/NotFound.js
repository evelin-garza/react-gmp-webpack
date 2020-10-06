import React from "react";

import "./NotFound.scss";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="main-container">
            <div className="topbar">
                <div className="container">
                    <Logo />
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h2>Page Not Found</h2>
                    <p>404</p>
                    <Link to="/"><button>Go Back To Home</button></Link>
                </div>
            </div>
            <Footer><Logo /></Footer>
        </div>
    );
}

export default NotFound;