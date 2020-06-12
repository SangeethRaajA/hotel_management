import React from "react";
import Nav from "../segment/Nav";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Nav />        
            <div className={className} style={{marginBottom:"5%"}}>
                {children}
            </div>
    </div>
);

export default Layout;