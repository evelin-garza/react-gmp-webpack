import React from "react";

import "./Footer.scss";

const Footer = (props) => {
    return (
        <footer className="footer">
            {props.children}
        </footer>
    )
};

export default Footer;