import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = () => (
    <div>
        <ul className="nav nav-tabs -fixed-top bg-dark">

            <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                    Home</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link text-white" to="/room">
                    Room</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link text-white" to="/category">
                    Category</Link>
            </li>

        </ul>
    </div>
)

export default withRouter(Menu);
