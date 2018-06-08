import React from "react";


export const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a>BIT People</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a >refresh</a></li>
                    <li><a >list</a></li>
                    <li><a >grid</a></li>
                </ul>
            </div>
        </nav>
    );
};